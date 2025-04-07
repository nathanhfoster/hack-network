//@ts-check

import type { NextConfig } from 'next';
import withPWA, { PWAConfig } from 'next-pwa';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { composePlugins, withNx } from '@nx/next';
import path from 'path';

const ENABLE_BUNDLE_ANALYZER = false;

const DISABLE_PWA_CONFIG = false; // Always enable PWA for testing

const bundleAnalyzer = withBundleAnalyzer({
  enabled: ENABLE_BUNDLE_ANALYZER,
});

const pwaConfig: PWAConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: DISABLE_PWA_CONFIG,
  sw: 'sw.js',
  scope: '/',
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
};

const plugins = [withNx, bundleAnalyzer, withPWAConfigured];

export default composePlugins(...plugins)(nextConfig);
