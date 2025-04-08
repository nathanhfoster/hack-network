import type {
  ProgressColor,
  ProgressLabelPosition,
  ProgressSize,
} from './types';

export const PROGRESS_SIZES: Record<ProgressSize, ProgressSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

export const PROGRESS_COLORS: Record<ProgressColor, ProgressColor> = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
};

export const PROGRESS_LABEL_POSITIONS: Record<
  ProgressLabelPosition,
  ProgressLabelPosition
> = {
  inside: 'inside',
  outside: 'outside',
  none: 'none',
};

export const PROGRESS_SIZE_STYLES: Record<ProgressSize, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
  xl: 'h-6',
};

export const PROGRESS_COLOR_STYLES: Record<ProgressColor, string> = {
  default: 'bg-blue-600 dark:bg-blue-500',
  primary: 'bg-blue-600 dark:bg-blue-500',
  secondary: 'bg-gray-600 dark:bg-gray-500',
  success: 'bg-green-600 dark:bg-green-500',
  danger: 'bg-red-600 dark:bg-red-500',
  warning: 'bg-yellow-400',
  info: 'bg-blue-600 dark:bg-blue-500',
  dark: 'bg-gray-600 dark:bg-gray-300',
};

export const PROGRESS_LABEL_COLOR_STYLES: Record<ProgressColor, string> = {
  default: 'text-blue-700 dark:text-blue-500',
  primary: 'text-blue-700 dark:text-blue-500',
  secondary: 'text-gray-700 dark:text-gray-500',
  success: 'text-green-700 dark:text-green-500',
  danger: 'text-red-700 dark:text-red-500',
  warning: 'text-yellow-700 dark:text-yellow-500',
  info: 'text-blue-700 dark:text-blue-500',
  dark: 'text-gray-700 dark:text-gray-500',
};
