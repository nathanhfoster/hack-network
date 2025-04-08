import type { PopoverPlacement } from './types';

export const POPOVER_PLACEMENTS: Record<PopoverPlacement, string> = {
  top: 'top-0',
  right: 'right-0',
  bottom: 'bottom-0',
  left: 'left-0',
};

export const POPOVER_BASE_CLASSES =
  'absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800';
export const POPOVER_HEADER_CLASSES =
  'px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700';
export const POPOVER_CONTENT_CLASSES = 'px-3 py-2';
export const POPOVER_ARROW_CLASSES = 'data-popper-arrow';
