const v = 1;
const obj = {
  prefix: `prefix${v}`,
  suffix: `suffix${v}`,
  precache: `precache${v}`,
  runtime: `runtime${v}`,
  img: `img${v}`,
  css: `css${v}`,
  js: `js${v}`,
};

const imgCacheName = obj.img;
const cssCacheName = obj.css;
const jsCacheName = obj.js;

workbox.setConfig({
  debug: false
});

workbox.core.setCacheNameDetails({
  prefix: obj.prefix,
  suffix: obj.suffix,
  precache: obj.precache,
  runtime: obj.runtime,
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// html的缓存策略, networkFirst 保证了离线可访问
workbox.routing.registerRoute(
  /\.(?:html)$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /\.(?:js)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: jsCacheName,
  })
);

workbox.routing.registerRoute(
  /\.(?:css)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: cssCacheName,
  })
);

workbox.routing.registerRoute(
  /\.(?:jpg|png)/,
  new workbox.strategies.CacheFirst({
    cacheName: imgCacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 2,
        maxAgeSeconds: 2 * 60,
      })
    ],
  })
);

