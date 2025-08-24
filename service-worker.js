const CACHE_NAME = 'samogitian-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/nav.html',
  '/armies.html',
  '/chapter1.html',
  '/chapter2.html',
  '/economy.html',
  '/maps.html',
  '/navies.html',
  '/powers.html',
  '/rulers.html',
  '/samogitia.html',
  '/assets/css/styles.css',
  '/assets/js/militaryData.js',
  '/maps/heartland.png',
  '/maps/world.png',
  '/maps/region.png',
  '/maps/regions.geojson'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

