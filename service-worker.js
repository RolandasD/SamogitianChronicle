const CACHE_NAME = 'samogitian-cache-v2';
const BASE_PATH = self.registration.scope;
const ASSETS_TO_CACHE = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}chronicle.html`,
  `${BASE_PATH}armies.html`,
  `${BASE_PATH}chapters/chapter1.html`,
  `${BASE_PATH}chapters/chapter2.html`,
  `${BASE_PATH}economy.html`,
  `${BASE_PATH}maps.html`,
  `${BASE_PATH}navies.html`,
  `${BASE_PATH}powers.html`,
  `${BASE_PATH}rulers.html`,
  `${BASE_PATH}samogitia.html`,
  `${BASE_PATH}timeline.html`,
  `${BASE_PATH}offline.html`,
  `${BASE_PATH}assets/css/styles.css`,
  `${BASE_PATH}assets/js/armiesData.js`,
  `${BASE_PATH}assets/js/armiesPage.js`,
  `${BASE_PATH}assets/js/economyData.js`,
  `${BASE_PATH}assets/js/economyPage.js`,
  `${BASE_PATH}assets/js/maps.js`,
  `${BASE_PATH}assets/js/militaryData.js`,
  `${BASE_PATH}assets/js/navToggle.js`,
  `${BASE_PATH}assets/js/naviesData.js`,
  `${BASE_PATH}assets/js/naviesPage.js`,
  `${BASE_PATH}assets/js/search.js`,
  `${BASE_PATH}assets/js/searchIndex.json`,
  `${BASE_PATH}assets/js/theme.js`,
  `${BASE_PATH}assets/js/timelineData.js`,
  `${BASE_PATH}maps/heartland.png`,
  `${BASE_PATH}maps/world.png`,
  `${BASE_PATH}maps/region.png`,
  `${BASE_PATH}maps/regions.geojson`
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
    caches
      .match(event.request)
      .then(
        response =>
          response ||
          fetch(event.request).catch(() => caches.match('offline.html'))
      )
  );
});

