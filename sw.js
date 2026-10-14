/* Periodic Table Explorer: cache core pages for offline access, refresh from network when online. */
'use strict';
const CORE_CACHE = 'pte-core-v1';
const CORE_FILES = [
  './', './index.html', './element.html', './quiz.html',
  './elements-data.js', './element-photo-data.js',
  './privacy.html', './support.html', './donco_logo_footer.png',
  './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CORE_CACHE).then(cache => cache.addAll(CORE_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pte-core-') && key !== CORE_CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.headers.has('range')) return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok && response.type === 'basic') {
        const copy = response.clone();
        event.waitUntil(caches.open(CORE_CACHE).then(cache => cache.put(event.request, copy)).catch(() => {}));
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
