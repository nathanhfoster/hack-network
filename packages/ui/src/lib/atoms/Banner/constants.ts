import type { BannerPosition, BannerVariant } from './types';

export const BANNER_POSITIONS: Record<BannerPosition, string> = {
  top: 'fixed top-0 left-0 right-0',
  bottom: 'fixed bottom-0 left-0 right-0',
};

export const BANNER_VARIANTS: Record<BannerVariant, string> = {
  default: 'bg-gray-50 dark:bg-gray-900',
  marketing: 'bg-blue-50 dark:bg-blue-900',
  newsletter: 'bg-green-50 dark:bg-green-900',
  informational: 'bg-purple-50 dark:bg-purple-900',
};

export const BANNER_BORDER_COLORS: Record<BannerVariant, string> = {
  default: 'border-gray-200 dark:border-gray-700',
  marketing: 'border-blue-200 dark:border-blue-800',
  newsletter: 'border-green-200 dark:border-green-800',
  informational: 'border-purple-200 dark:border-purple-800',
};

export const BANNER_TEXT_COLORS: Record<BannerVariant, string> = {
  default: 'text-gray-800 dark:text-gray-200',
  marketing: 'text-blue-800 dark:text-blue-200',
  newsletter: 'text-green-800 dark:text-green-200',
  informational: 'text-purple-800 dark:text-purple-200',
};

export const BANNER_ICON_COLORS: Record<BannerVariant, string> = {
  default: 'text-gray-800 dark:text-gray-200',
  marketing: 'text-blue-800 dark:text-blue-200',
  newsletter: 'text-green-800 dark:text-green-200',
  informational: 'text-purple-800 dark:text-purple-200',
};

export const BANNER_ICON_BG_COLORS: Record<BannerVariant, string> = {
  default: 'bg-gray-100 dark:bg-gray-800',
  marketing: 'bg-blue-100 dark:bg-blue-800',
  newsletter: 'bg-green-100 dark:bg-green-800',
  informational: 'bg-purple-100 dark:bg-purple-800',
};

export const BANNER_BUTTON_COLORS: Record<BannerVariant, string> = {
  default:
    'text-white bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
  marketing:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800',
  newsletter:
    'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800',
  informational:
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-800',
};

export const BANNER_SECONDARY_BUTTON_COLORS: Record<BannerVariant, string> = {
  default:
    'text-gray-800 bg-white border border-gray-700 hover:bg-gray-100 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
  marketing:
    'text-blue-800 bg-white border border-blue-700 hover:bg-blue-100 focus:ring-blue-300 dark:bg-blue-800 dark:text-blue-300 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  newsletter:
    'text-green-800 bg-white border border-green-700 hover:bg-green-100 focus:ring-green-300 dark:bg-green-800 dark:text-green-300 dark:border-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  informational:
    'text-purple-800 bg-white border border-purple-700 hover:bg-purple-100 focus:ring-purple-300 dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
};

export const BANNER_DISMISS_COLORS: Record<BannerVariant, string> = {
  default:
    'text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
  marketing:
    'text-blue-400 hover:text-blue-900 hover:bg-blue-100 dark:hover:bg-blue-700 dark:hover:text-white',
  newsletter:
    'text-green-400 hover:text-green-900 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white',
  informational:
    'text-purple-400 hover:text-purple-900 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white',
};
