import type { AccordionColor, AccordionVariant } from './types';

export const ACCORDION_VARIANTS: Record<AccordionVariant, AccordionVariant> = {
  default: 'default',
  flush: 'flush',
  bordered: 'bordered',
};

export const ACCORDION_COLORS: Record<AccordionColor, AccordionColor> = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
};

export const ACCORDION_VARIANT_STYLES: Record<AccordionVariant, string> = {
  default: 'border border-gray-200 dark:border-gray-700',
  flush: '',
  bordered: 'border border-gray-200 dark:border-gray-700',
};

export const ACCORDION_COLOR_STYLES: Record<AccordionColor, string> = {
  default:
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
  primary:
    'text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20',
  secondary:
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
  success:
    'text-green-500 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20',
  danger:
    'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20',
  warning:
    'text-yellow-500 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
  info: 'text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20',
  dark: 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
};

export const ACCORDION_ACTIVE_COLOR_STYLES: Record<AccordionColor, string> = {
  default: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
  primary: 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100',
  secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
  success:
    'bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100',
  danger: 'bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100',
  warning:
    'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100',
  info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100',
  dark: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
};
