/* Periodic Table Explorer: offline core + explicit photo allowlist.
 * These image files are staging candidates, not a statement of copyright clearance.
 * Installation fails rather than silently saving only a subset of the 92 images.
 */
'use strict';
const CORE_CACHE = 'pte-core-v4';
const PHOTO_MANIFEST = './offline-photos.json';
const CORE_FILES = [
  './', './index.html', './element.html', './quiz.html', './about.html',
  './elements-data.js', './element-photo-data.js',
  './privacy.html', './support.html', './donco_logo_footer.png',
  './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png',
  './icons/periodic-table-icon.svg', './images/bay-city-city-hall.jpg',
  PHOTO_MANIFEST
];
const CHUNK_SIZE = 12;

async function precacheApp() {
  const cache = await caches.open(CORE_CACHE);
  await cache.addAll(CORE_FILES);
  const response = await cache.match(PHOTO_MANIFEST);
  if (!response || !response.ok) throw new Error('Offline photo manifest not available');
  const manifest = await response.json();
  if (manifest?.format !== 'pte-offline-photos-v1' || !Array.isArray(manifest.photos) ||
      manifest.photos.length !== 92 || new Set(manifest.photos).size !== 92 ||
      manifest.photos.some(path => typeof path !== 'string' ||
        !/^images\/elements\/\d{3}-[a-z]{1,2}\.jpg$/.test(path))) {
    throw new Error('Offline photo manifest invalid or out of date');
  }
  // The packaging CI compares this exact allowlist with the real photo catalog;
  // the service worker itself never requests undisplayed/withheld image files.
  for (let i = 0; i < manifest.photos.length; i += CHUNK_SIZE) {
    await cache.addAll(manifest.photos.slice(i, i + CHUNK_SIZE).map(path => './' + path));
  }
}

self.addEventListener('install', event => {
  event.waitUntil(precacheApp().then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('pte-core-') && key !== CORE_CACHE)
        .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.headers.has('range')) return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin ||
      !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok && response.type === 'basic') {
        const copy = response.clone();
        event.waitUntil(caches.open(CORE_CACHE).then(cache =>
          cache.put(event.request, copy)).catch(() => {}));
      }
      return response;
    }).catch(async () => {
      const cache = await caches.open(CORE_CACHE);
      return (await cache.match(event.request, {ignoreSearch:true}))
        || (event.request.mode === 'navigate' ? await cache.match('./index.html') : null)
        || Response.error();
    })
  );
});
