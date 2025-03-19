const CACHE_NAME = 'mi-app-cache-v1';
const BASE_URL = '/memoryReact';  // Añade la subruta aquí

const urlsToCache = [
  `${BASE_URL}/`,
  `${BASE_URL}/index.html`,
  `${BASE_URL}/static/js/main.9c701b54.js`,
  `${BASE_URL}/static/js/main.9c701b54.js.LICENSE.txt`,
  `${BASE_URL}/static/js/main.9c701b54.js.map`,
  `${BASE_URL}/static/css/main.df6056e8.css`,
  `${BASE_URL}/manifest.json`,
  `${BASE_URL}/icon-192x192.png`,
  `${BASE_URL}/icon-512x512.png`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
