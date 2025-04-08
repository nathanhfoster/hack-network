const isClientSide = (checkServiceWorker = false) => {
  const isBrowser = typeof window !== 'undefined';

  if (!isBrowser) {
    return false;
  }

  if (checkServiceWorker) {
    return 'serviceWorker' in navigator;
  }

  return true;
};

export default isClientSide;
