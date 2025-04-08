import type { BadgeColor, BadgeSize, BadgeVariant } from './types';

export const BADGE_COLORS: Record<BadgeColor, string> = {
  default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  yellow:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  indigo:
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  purple:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
};

export const BADGE_SIZES: Record<BadgeSize, string> = {
  xs: 'text-xs px-2.5 py-0.5',
  sm: 'text-sm px-2.5 py-0.5',
};

export const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  default: 'rounded-sm',
  bordered: 'rounded-sm border',
  pill: 'rounded-full',
};

export const BADGE_BORDER_COLORS: Record<BadgeColor, string> = {
  default: 'border-blue-400 dark:border-blue-400',
  dark: 'border-gray-500 dark:border-gray-400',
  red: 'border-red-400 dark:border-red-400',
  green: 'border-green-400 dark:border-green-400',
  yellow: 'border-yellow-400 dark:border-yellow-400',
  indigo: 'border-indigo-400 dark:border-indigo-400',
  purple: 'border-purple-400 dark:border-purple-400',
  pink: 'border-pink-400 dark:border-pink-400',
};

export const BADGE_DISMISS_COLORS: Record<BadgeColor, string> = {
  default:
    'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
  dark: 'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
  red: 'text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
  green:
    'text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
  yellow:
    'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
  indigo:
    'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
  purple:
    'text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300',
  pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300',
};
