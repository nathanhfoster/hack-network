import type { SpinnerSize, SpinnerColor } from './types';

export const SPINNER_SIZES: Record<SpinnerSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

export const SPINNER_COLORS: Record<SpinnerColor, string> = {
  blue: 'text-blue-600 dark:text-blue-500',
  green: 'text-green-600 dark:text-green-500',
  red: 'text-red-600 dark:text-red-500',
  yellow: 'text-yellow-600 dark:text-yellow-500',
  purple: 'text-purple-600 dark:text-purple-500',
  gray: 'text-gray-600 dark:text-gray-500',
};

export const SPINNER_BASE_CLASSES = 'animate-spin';
export const SPINNER_BG_CLASSES = 'text-gray-200 dark:text-gray-600';
