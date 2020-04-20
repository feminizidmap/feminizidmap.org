const CACHE_NAME = 'feminizidmap-cache-v1';
var urlsToCache = [
  '/',
  '/de/',
  '/offline/',
  '/sass/site.css',
  '/js/vendor.js',
  '/js/main.js',
  '/fonts/StabilGrotesk-Regular.woff',
  '/fonts/Blanco-Regular.woff2',
  '/bg-gradient-01.webp',
  '/bg-gradient-02.webp'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fromCache(event.request))

  event.waitUntil(update(event.request)
                  .then(refresh))
});


const fromCache = request => {
  return caches.open(CACHE_NAME)
    .then(cache => cache.match(request))
}

const update = request => {
  return caches.open(CACHE_NAME)
    .then(cache => fetch(request)
          .catch(error => {
            console.log('[onfetch] Failed, serving fallback ' + error)
            return caches.open(CACHE_NAME).then(cache => cache.match('/offline/'))
          })
          .then(response => cache.put(request, response.clone())
                .then(() => response)))
}

const refresh = response => {
  return self.clients.matchAll()
    .then(clients => clients.forEach(client => {
      let message = {
        type: 'refresh',
        url: response.url,
        eTag: response.headers.get('ETag')
      }

      client.postMessage(JSON.stringify(message))
    }))
}
