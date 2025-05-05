import isClientSide from './isClientSide';

const isPwaInstalled = () => {
  if (!isClientSide()) return false;

  return (window.matchMedia?.('(display-mode: standalone)').matches ?? false) ||
         window.navigator.standalone === true;
};

export default isPwaInstalled;