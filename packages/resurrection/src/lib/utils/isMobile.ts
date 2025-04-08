import isClientSide from './isClientSide';

const DEFAULT_VALUE = {
  userAgent: '',
  isMobile: false,
};

const isMobile = () => {
  if (!isClientSide(true)) {
    return DEFAULT_VALUE;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();

  // Check if the device is mobile
  const onMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    );

  return { userAgent, isMobile: onMobile };
};

export default isMobile;
