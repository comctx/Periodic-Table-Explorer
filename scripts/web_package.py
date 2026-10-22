"""Build and verify the iOS Web payload; photo inclusion is not license clearance."""
import argparse
from collections import Counter
import json
from pathlib import Path
import re
import shutil
import zipfile

CORE = {
    'index.html', 'element.html', 'quiz.html', 'about.html',
    'elements-data.js', 'element-photo-data.js', 'privacy.html', 'support.html',
    'donco_logo_footer.png', 'sw.js', 'manifest.webmanifest', 'offline-photos.json',
    'icons/icon-192.png', 'icons/icon-512.png', 'icons/periodic-table-icon.svg',
    'images/bay-city-city-hall.jpg',
}
PHOTO_PATTERN = r'images/elements/\d{3}-[a-z]{1,2}\.jpg'


def require(condition, message):
    if not condition:
        raise ValueError(message)


def expected_files(source):
    manifest = json.loads((source / 'offline-photos.json').read_text())
    photos = manifest.get('photos')
    require(manifest.get('format') == 'pte-offline-photos-v1', 'Invalid photo manifest format')
    require(isinstance(photos, list) and len(photos) == 92, 'Expected exactly 92 photos')
    require(all(isinstance(p, str) and re.fullmatch(PHOTO_PATTERN, p) for p in photos),
            'Invalid photo path')
    require(len(set(photos)) == 92, 'Duplicate photo path')
    text = (source / 'element-photo-data.js').read_text()
    match = re.fullmatch(r'\s*window\.ELEMENT_PHOTOS\s*=\s*(\{.*\});\s*', text, re.S)
    require(match is not None, 'Unexpected photo catalog format')
    catalog = json.loads(match[1])
    require(set(catalog) == {str(n) for n in range(1, 119)}, 'Expected 118 catalog entries')
    # Match the display exclusions in loadElementPhoto in element.html.
    displayed = []
    for number, item in catalog.items():
        title = item.get('title', '')
        licensed = re.match(r'^https?://[^\s/]+', item.get('licenseUrl', ''), re.I)
        withheld = (
            int(number) in (84, 85, 86, 87) or int(number) >= 100
            or re.fullmatch('No Image Found', title, re.I)
            or re.search(r'/s/transactinoid\.png$', item.get('originalUrl', ''), re.I)
            or re.search(r'only an illustration|not .* itself|unrelated particle', title, re.I)
            or item.get('withholdReason')
            or (not licensed and not re.search('public domain', item.get('attribution', ''), re.I))
        )
        if not withheld and item.get('localUrl'):
            displayed.append(item['localUrl'])
    require(len(displayed) == 92 and set(displayed) == set(photos),
            'Photo allowlist differs from displayed catalog')
    sw = (source / 'sw.js').read_text()
    core_match = re.search(r'const CORE_FILES = \[(.*?)\];', sw, re.S)
    require(core_match is not None, 'Missing service worker core list')
    sw_files = {p.removeprefix('./') for p in re.findall(r"'([^']+)'", core_match[1])}
    sw_files.discard('')
    require('PHOTO_MANIFEST' in core_match[1], 'Service worker omits photo manifest')
    sw_files.add('offline-photos.json')
    require(sw_files == CORE - {'sw.js'}, 'Service worker core asset list changed; review packaging')
    pwa = json.loads((source / 'manifest.webmanifest').read_text())
    require(all(icon['src'].removeprefix('./') in CORE for icon in pwa['icons']),
            'PWA icon omitted from package')
    expected = CORE | set(photos)
    for path in expected:
        require((source / path).is_file() and (source / path).stat().st_size > 0,
                f'Missing or empty source asset: {path}')
    return expected


def verify(source, names, read):
    expected = expected_files(source)
    counts = Counter(names)
    require(all(count == 1 for count in counts.values()), 'Duplicate package entry')
    require(set(names) == expected,
            f'Payload mismatch: missing={sorted(expected - set(names))}; extra={sorted(set(names) - expected)}')
    for path in sorted(expected):
        require(read(path) == (source / path).read_bytes(), f'Asset content mismatch: {path}')
    print('Verified Web payload: 92 allowlisted photos and all required assets; source bytes match.')


def build(source, destination):
    expected = expected_files(source)
    source, destination = source.resolve(), destination.resolve()
    require(destination.name == 'Web' and destination != source,
            'Build destination must be a dedicated Web directory')
    require(destination not in source.parents, 'Destination must not contain source tree')
    if destination.exists():
        shutil.rmtree(destination)
    for path in sorted(expected):
        target = destination / path
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source / path, target)
    verify(source, [p.relative_to(destination).as_posix() for p in destination.rglob('*') if p.is_file()],
           lambda path: (destination / path).read_bytes())


def verify_ipa(source, ipa):
    with zipfile.ZipFile(ipa) as archive:
        roots = [n.rsplit('/', 1)[0] + '/Web/' for n in archive.namelist()
                 if re.fullmatch(r'Payload/[^/]+\.app/Info\.plist', n)]
        require(len(roots) == 1, 'Expected exactly one main app in IPA')
        root = roots[0]
        names = [n[len(root):] for n in archive.namelist() if n.startswith(root) and not n.endswith('/')]
        verify(source, names, lambda path: archive.read(root + path))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=Path(__file__).resolve().parents[1])
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument('--build', type=Path)
    action.add_argument('--ipa', type=Path)
    args = parser.parse_args()
    if args.build:
        build(args.source, args.build)
    else:
        verify_ipa(args.source, args.ipa)
