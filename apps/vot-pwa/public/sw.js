if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let r = {};
    const c = (e) => n(e, a),
      v = { module: { uri: a }, exports: r, require: c };
    s[a] = Promise.all(t.map((e) => v[e] || c(e))).then((e) => (i(...e), r));
  };
}
define(['./workbox-440d3704'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '1e201563a5bbe6c4893fed4dabbec177',
        },
        {
          url: '/_next/static/8v5ZNvqCPCUUrLnj8xveg/_buildManifest.js',
          revision: '7f16be05f1ad14a56bc0a91f230b5418',
        },
        {
          url: '/_next/static/8v5ZNvqCPCUUrLnj8xveg/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/36acf3af-a24caece803cacbe.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/699-57be426d7b6e4578.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/968-c3ae27a0df2c47ac.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/969-b19fd2f357fc0e9f.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-d4d9a96d42b965c4.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/app/api/hello/route-db378e46b2370f04.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/app/layout-e5236c689e019968.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/app/page-db7bf93d9ae817b3.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/framework-ffe6f9f02cf712ff.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/main-6694958e9b78e63f.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/main-app-506f322c3af27a06.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/pages/_app-67dd3c39c6a8a61a.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/pages/_error-cc3a26ffbd2a9a50.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-369604cab1d39676.js',
          revision: '8v5ZNvqCPCUUrLnj8xveg',
        },
        {
          url: '/_next/static/css/7621e92de040d062.css',
          revision: '7621e92de040d062',
        },
        { url: '/favicon.ico', revision: 'd4d62b2ac4cfa63ade7f1766fb098bc5' },
        { url: '/manifest.json', revision: '2f614970467d3f7e669aa46fbe4acd66' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^\/_next\/static\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 172800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'general-cache',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 172800 }),
        ],
      }),
      'GET',
    );
});
