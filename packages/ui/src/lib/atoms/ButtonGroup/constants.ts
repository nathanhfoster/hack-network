import type { ButtonGroupItemProps } from './types';

export const BUTTON_GROUP_BASE_CLASSES = 'inline-flex rounded-md shadow-xs';

export const BUTTON_GROUP_ITEM_BASE_CLASSES = 'px-4 py-2 text-sm font-medium';

export const BUTTON_GROUP_ITEM_STYLES: Record<
  NonNullable<ButtonGroupItemProps['variant']>,
  string
> = {
  default:
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white',
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-700 focus:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white',
  secondary:
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white',
  alternative:
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700',
  light:
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:bg-gray-700',
  green:
    'text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:text-white dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500 dark:focus:text-white',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:text-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white',
  yellow:
    'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:text-white dark:focus:ring-yellow-500 dark:focus:text-white',
  purple:
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-500 dark:focus:text-white',
  outline:
    'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-500 dark:focus:text-white',
  gradient:
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:ring-blue-500 focus:text-white dark:focus:ring-blue-500 dark:focus:text-white',
  gradientDuotone:
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br focus:ring-2 focus:ring-purple-500 focus:text-white dark:focus:ring-purple-500 dark:focus:text-white',
  gradientOutline:
    'text-blue-700 hover:text-white border border-blue-700 hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-2 focus:ring-blue-500 focus:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 dark:focus:ring-blue-500 dark:focus:text-white',
};

export const BUTTON_GROUP_ITEM_POSITION_CLASSES = {
  first: 'rounded-s-lg',
  middle: 'border-t border-b',
  last: 'rounded-e-lg',
};

export const BUTTON_GROUP_OUTLINE_STYLES = {
  default:
    'text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700',
  active:
    'text-white bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:text-white',
};
