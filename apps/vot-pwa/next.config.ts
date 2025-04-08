//@ts-check

import type { NextConfig } from 'next';
import withPWA, { PWAConfig } from 'next-pwa';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { composePlugins, withNx } from '@nx/next';
import path from 'path';
import { version } from './package.json';

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const ENABLE_BUNDLE_ANALYZER = false; // IS_DEV;

const bundleAnalyzer = withBundleAnalyzer({
  enabled: ENABLE_BUNDLE_ANALYZER,
});

const pwaConfig: PWAConfig = {
  dest: 'public', // The output folder for PWA assets
  register: IS_PROD, // Only register in production
  skipWaiting: true, // Prompts users to reload when a new service worker is available
  clientsClaim: true, // Ensures new service worker takes control of pages right away
  disable: IS_DEV, // Explicitly disable in development
  reloadOnOnline: true, // Reload when coming back online
  buildExcludes: [/app-build-manifest.json$/],
  runtimeCaching: [
    {
      urlPattern: /^\/_next\/static\/.*/i,
      handler: 'StaleWhileRevalidate', // Less aggressive caching
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
      handler: 'NetworkFirst', // Ensure fresh content for all other requests
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
  trailingSlash: true,
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
        {
          key: 'Service-Worker-Allowed',
          value: '/',
        },
      ],
    },
  ],
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add workspace packages to module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      resurrection: path.resolve(__dirname, '../../packages/resurrection'),
      '@hack-network/ui': path.resolve(__dirname, '../../packages/ui'),
    };
    return config;
  },
  publicRuntimeConfig: {
    version,
  },
};

const plugins = [withNx, bundleAnalyzer, withPWAConfigured];

export default composePlugins(...plugins)(nextConfig);
