import './global.css';
import type { Metadata, Viewport } from 'next';
import MANIFEST from '../../public/manifest.json';
import { AdminContextProvider } from '../context/AdminContext';
import { cache } from 'react';
import { AdminServerProps } from '../context/AdminContext/types';
import { AdminRole } from '../context/AdminContext/types';

const getAdminData = cache(async (): Promise<AdminServerProps> => {
  // Simulate API delay with timeout
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    users: [
      {
        id: '1',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        role: AdminRole.SUPER_ADMIN,
        permissions: ['all'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  };
});

export const viewport: Viewport = {
  themeColor: MANIFEST.theme_color,
  colorScheme: 'normal',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: MANIFEST.name,
  description: MANIFEST.description,
  applicationName: MANIFEST.name,
  generator: 'nextjs',
  manifest: '/manifest.json',
  keywords: MANIFEST.categories,
  icons: MANIFEST.icons.map((i) => ({ rel: 'icon', url: i.src })),
  openGraph: {
    type: 'website',
    url: 'https://vot-sigma.vercel.app',
    title: MANIFEST.name,
    description: MANIFEST.description,
    siteName: MANIFEST.name,
    images: [
      {
        url: '/icons/icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'VOT PWA Icon',
      },
    ],
  },
  verification:{},
  appleWebApp: {
    capable: true,
    title: MANIFEST.name,
    statusBarStyle: 'black-translucent',
  },
  category: MANIFEST.categories[0],
  metadataBase: new URL('https://vot-sigma.vercel.app'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = await getAdminData();
  return (
    <AdminContextProvider initialState={initialState}>
      <html lang="en" className="overflow-x-hidden">
        <head></head>
        <body className="overflow-x-hidden flex flex-col min-h-screen bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark">
          {children}
        </body>
      </html>
    </AdminContextProvider>
  );
}
