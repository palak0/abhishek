

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('bday').then(function(cache) {
     return cache.addAll([
       '/'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
 });