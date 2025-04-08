'use client';

import { useInstallPromptHandler } from '../../hooks';
import { DownloadAppButtonProps } from './types';

const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  component: Component = 'button',
  label = 'Download',
  children,
}) => {
  const { deferredPrompt, handleInstallClick } = useInstallPromptHandler();

  if (!deferredPrompt) {
    return null;
  }

  const buttonStyles =
    'px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition w-full md:w-auto';
  const spanStyles = 'cursor-pointer hover:text-gray-400';

  return (
    <>
      {children}
      <Component
        className={Component === 'button' ? buttonStyles : spanStyles}
        onClick={handleInstallClick}
      >
        {label}
      </Component>
    </>
  );
};

export default DownloadAppButton;
