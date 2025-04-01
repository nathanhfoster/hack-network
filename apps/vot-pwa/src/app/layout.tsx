import './global.css';
import type { Metadata } from 'next';
import MANIFEST from '../../public/manifest.json';

export const metadata: Metadata = {
  title: MANIFEST.name,
  description: MANIFEST.description,
  applicationName: MANIFEST.name,
  generator: 'nextjs',
  themeColor: '#000000',
  colorScheme: 'normal',
  manifest: '/manifest.json',
  icons: MANIFEST.icons.map((i) => ({ rel: 'icon', url: i.src })),
  openGraph: {
    type: 'website',
    url: 'https://vot-pwa.example.com',
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
  appleWebApp: {
    capable: true,
    title: MANIFEST.name,
    statusBarStyle: 'black-translucent',
  },
  metadataBase: new URL('https://vot-pwa.example.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head></head>
      <body className="overflow-x-hidden flex flex-col min-h-screen bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark">
        {children}
      </body>
    </html>
  );
}
