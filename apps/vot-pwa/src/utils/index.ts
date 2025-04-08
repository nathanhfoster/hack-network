import { headers } from 'next/headers';

export const getFullUrl = async () => {
  const headersList = await headers();

  // console.log(Object.fromEntries(headersList.entries()));

  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const pathname = headersList.get('x-nextjs-url') || '/';
  const fullUrl = `${protocol}://${host}${pathname}`;

  const referer = headersList.get('referer');
  const page = referer?.split('/').pop();

  return {
    host,
    protocol,
    pathname,
    fullUrl,
    referer,
    page,
  };
};
