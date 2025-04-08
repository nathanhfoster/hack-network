import type { AsidePosition, AsideBackgroundColor } from './types';

export const ASIDE_POSITIONS: Record<AsidePosition, AsidePosition> = {
  left: 'left',
  right: 'right',
};

export const ASIDE_BACKGROUND_COLORS: Record<AsideBackgroundColor, string> = {
  default: 'bg-gray-50 dark:bg-gray-800',
  white: 'bg-white dark:bg-gray-900',
  gray: 'bg-gray-50 dark:bg-gray-800',
  dark: 'bg-gray-900 dark:bg-gray-900',
  primary: 'bg-blue-50 dark:bg-blue-900/20',
  secondary: 'bg-gray-100 dark:bg-gray-700',
  accent: 'bg-purple-50 dark:bg-purple-900/20',
};

export const ASIDE_POSITION_STYLES: Record<AsidePosition, string> = {
  left: 'border-l-4',
  right: 'border-r-4',
};

export const ASIDE_BACKGROUND_STYLES: Record<AsideBackgroundColor, string> = {
  default: 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
  white: 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700',
  gray: 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600',
  dark: 'bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700',
  primary:
    'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  secondary:
    'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600',
  accent:
    'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
};
