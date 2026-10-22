import json
from pathlib import Path
import shutil
import tempfile
import unittest
import zipfile

from web_package import build, expected_files, verify_ipa


class PackageTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = Path(__file__).resolve().parents[1]
        self.web = self.root / 'Web'
        build(self.source, self.web)

    def make_ipa(self, mutation=None):
        ipa = self.root / 'fixture.ipa'
        with zipfile.ZipFile(ipa, 'w') as archive:
            archive.writestr('Payload/Explorer.app/Info.plist', b'package-test fixture')
            for path in self.web.rglob('*'):
                if path.is_file():
                    archive.write(path, 'Payload/Explorer.app/Web/' + path.relative_to(self.web).as_posix())
            if mutation:
                mutation(archive)
        return ipa

    def test_valid_payload(self):
        verify_ipa(self.source, self.make_ipa())

    def test_each_missing_core_asset_rejected(self):
        from web_package import CORE
        for name in CORE:
            with self.subTest(name=name):
                path = self.web / name
                data = path.read_bytes()
                path.unlink()
                with self.assertRaisesRegex(ValueError, 'Payload mismatch'):
                    verify_ipa(self.source, self.make_ipa())
                path.write_bytes(data)

    def test_missing_photo_rejected(self):
        (self.web / 'images/elements/001-h.jpg').unlink()
        with self.assertRaisesRegex(ValueError, 'Payload mismatch'):
            verify_ipa(self.source, self.make_ipa())

    def test_withheld_photo_rejected(self):
        shutil.copy2(self.source / 'images/elements/061-pm.jpg', self.web / 'images/elements/061-pm.jpg')
        with self.assertRaisesRegex(ValueError, 'Payload mismatch'):
            verify_ipa(self.source, self.make_ipa())

    def test_stale_asset_rejected(self):
        (self.web / 'element-photo-data.js').write_text('stale catalog')
        with self.assertRaisesRegex(ValueError, 'Asset content mismatch'):
            verify_ipa(self.source, self.make_ipa())

    def test_duplicate_zip_entry_rejected(self):
        import warnings
        with warnings.catch_warnings():
            warnings.simplefilter('ignore', UserWarning)
            ipa = self.make_ipa(lambda z: z.writestr('Payload/Explorer.app/Web/index.html', b'other'))
        with self.assertRaisesRegex(ValueError, 'Duplicate'):
            verify_ipa(self.source, ipa)

    def test_bad_manifests_and_catalog_drift_rejected(self):
        source = self.root / 'source'
        shutil.copytree(self.source, source, ignore=shutil.ignore_patterns('.git', '__pycache__'))
        path = source / 'offline-photos.json'
        good = json.loads(path.read_text())
        for change in ('duplicate', 'path', 'catalog', 'format'):
            with self.subTest(change=change):
                data = json.loads(json.dumps(good))
                if change == 'duplicate':
                    data['photos'][0] = data['photos'][1]
                elif change == 'path':
                    data['photos'][0] = '../escape.jpg'
                elif change == 'catalog':
                    data['photos'][0] = 'images/elements/061-pm.jpg'
                else:
                    data['format'] = 'unknown'
                path.write_text(json.dumps(data))
                with self.assertRaises(ValueError):
                    expected_files(source)


if __name__ == '__main__':
    unittest.main()
