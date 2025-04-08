import type { BottomNavigationVariant } from './types';

export const BOTTOM_NAVIGATION_VARIANTS: Record<
  BottomNavigationVariant,
  string
> = {
  default: 'bg-white dark:bg-gray-700',
  bordered:
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  'app-bar':
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  pagination:
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  'button-group':
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  card: 'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  meeting:
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
  video:
    'bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
};

export const BOTTOM_NAVIGATION_ITEM_STYLES: Record<
  BottomNavigationVariant,
  string
> = {
  default:
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  bordered:
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  'app-bar':
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  pagination:
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  'button-group':
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  card: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  meeting:
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
  video:
    'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
};

export const BOTTOM_NAVIGATION_ICON_STYLES: Record<
  BottomNavigationVariant,
  string
> = {
  default:
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  bordered:
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  'app-bar':
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  pagination:
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  'button-group':
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  card: 'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  meeting:
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  video:
    'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
};

export const BOTTOM_NAVIGATION_LABEL_STYLES: Record<
  BottomNavigationVariant,
  string
> = {
  default:
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  bordered:
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  'app-bar':
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  pagination:
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  'button-group':
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  card: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  meeting:
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  video:
    'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
};

export const BOTTOM_NAVIGATION_ACTIVE_STYLES: Record<
  BottomNavigationVariant,
  string
> = {
  default: 'text-blue-600 dark:text-blue-500',
  bordered: 'text-blue-600 dark:text-blue-500',
  'app-bar': 'text-blue-600 dark:text-blue-500',
  pagination: 'text-blue-600 dark:text-blue-500',
  'button-group': 'text-blue-600 dark:text-blue-500',
  card: 'text-blue-600 dark:text-blue-500',
  meeting: 'text-blue-600 dark:text-blue-500',
  video: 'text-blue-600 dark:text-blue-500',
};

export const BOTTOM_NAVIGATION_DISABLED_STYLES: Record<
  BottomNavigationVariant,
  string
> = {
  default: 'opacity-50 cursor-not-allowed',
  bordered: 'opacity-50 cursor-not-allowed',
  'app-bar': 'opacity-50 cursor-not-allowed',
  pagination: 'opacity-50 cursor-not-allowed',
  'button-group': 'opacity-50 cursor-not-allowed',
  card: 'opacity-50 cursor-not-allowed',
  meeting: 'opacity-50 cursor-not-allowed',
  video: 'opacity-50 cursor-not-allowed',
};
