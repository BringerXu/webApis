/// <reference lib="WebWorker" />
var CACHE_NAME = 'test-cache';
var urlsToCache = [
  './index.js',
];

addEventListener('install', function (event) {
  console.log(event)
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('cache open')
      return cache.addAll(urlsToCache)
    })
  )
});

addEventListener('activate', function (event) {
  console.log('onactivate')
})

addEventListener('message', function (event) {
  console.log('onmessage', event);
})

addEventListener('fetch', function (event) {
  console.log('fetch', event);
})



