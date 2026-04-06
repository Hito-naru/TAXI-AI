self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('taxi-app').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/app.js'
      ]);
    })
  );
});
