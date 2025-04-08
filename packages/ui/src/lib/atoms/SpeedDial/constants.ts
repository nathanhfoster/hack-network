import type { SpeedDialPosition, SpeedDialDirection } from './types';

export const SPEED_DIAL_POSITIONS: Record<SpeedDialPosition, string> = {
  top: 'top-0',
  right: 'right-0',
  bottom: 'bottom-0',
  left: 'left-0',
};

export const SPEED_DIAL_DIRECTIONS: Record<SpeedDialDirection, string> = {
  up: 'flex-col-reverse space-y-reverse space-y-4',
  down: 'flex-col space-y-4',
  left: 'flex-row-reverse space-x-reverse space-x-4',
  right: 'flex-row space-x-4',
};

export const SPEED_DIAL_BASE_CLASSES = 'fixed group';
export const SPEED_DIAL_TRIGGER_CLASSES =
  'flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
export const SPEED_DIAL_ACTIONS_CLASSES = 'flex items-center hidden mb-4';
export const SPEED_DIAL_ACTION_CLASSES =
  'flex justify-center items-center w-14 h-14 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400';
export const SPEED_DIAL_TOOLTIP_CLASSES =
  'absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700';
