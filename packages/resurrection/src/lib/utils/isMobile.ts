const isMobile = (window: Window | null) => {
  if (!window) {
    return false;
  }

  return /Mobile/i.test(window.navigator.userAgent);
};

export default isMobile;
