//@ts-check

import type { NextConfig } from 'next';
import withPWA, { PWAConfig } from 'next-pwa';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { composePlugins, withNx } from '@nx/next';

const ENABLE_BUNDLE_ANALYZER = false;

const DISABLE_PWA_CONFIG = process.env.NODE_ENV === 'development';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: ENABLE_BUNDLE_ANALYZER,
});

const pwaConfig: PWAConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: DISABLE_PWA_CONFIG,
  // buildExcludes: [/app-build-manifest.json$/],
  runtimeCaching: [
    {
      urlPattern: /^\/_next\/static\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-assets',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 2,
        },
      },
    },
    {
      urlPattern: /.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'general-cache',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 2,
        },
      },
    },
  ],
};

const withPWAConfigured = withPWA(pwaConfig);

const nextConfig: NextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: ['@hack-network/ui', 'resurrection'],
  experimental: {
    externalDir: true,
  },
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
      ],
    },
  ],
  images: {
    unoptimized: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  bundleAnalyzer,
  withPWAConfigured,
];

export default composePlugins(...plugins)(nextConfig);
