import type { AlertColor, AlertVariant } from './types';

export const ALERT_COLORS: Record<AlertColor, AlertColor> = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
};

export const ALERT_VARIANTS: Record<AlertVariant, AlertVariant> = {
  default: 'default',
  bordered: 'bordered',
  'with-list': 'with-list',
};

export const ALERT_COLOR_STYLES: Record<AlertColor, string> = {
  default: 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300',
  primary: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
  secondary: 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300',
  success: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
  danger: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
  warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
  info: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
  dark: 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300',
};

export const ALERT_BORDER_COLOR_STYLES: Record<AlertColor, string> = {
  default: 'border-gray-200 dark:border-gray-700',
  primary: 'border-blue-200 dark:border-blue-800',
  secondary: 'border-gray-200 dark:border-gray-700',
  success: 'border-green-200 dark:border-green-800',
  danger: 'border-red-200 dark:border-red-800',
  warning: 'border-yellow-200 dark:border-yellow-800',
  info: 'border-blue-200 dark:border-blue-800',
  dark: 'border-gray-200 dark:border-gray-700',
};

export const ALERT_ICON_COLOR_STYLES: Record<AlertColor, string> = {
  default: 'text-gray-400 dark:text-gray-300',
  primary: 'text-blue-400 dark:text-blue-300',
  secondary: 'text-gray-400 dark:text-gray-300',
  success: 'text-green-400 dark:text-green-300',
  danger: 'text-red-400 dark:text-red-300',
  warning: 'text-yellow-400 dark:text-yellow-300',
  info: 'text-blue-400 dark:text-blue-300',
  dark: 'text-gray-400 dark:text-gray-300',
};

export const ALERT_DISMISS_COLOR_STYLES: Record<AlertColor, string> = {
  default:
    'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
  primary:
    'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  secondary:
    'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
  success:
    'text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
  danger:
    'text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
  warning:
    'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
  info: 'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  dark: 'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
};
