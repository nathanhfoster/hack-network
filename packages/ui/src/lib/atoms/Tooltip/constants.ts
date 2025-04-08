import type { TooltipStyle } from './types';

export const TOOLTIP_BASE_CLASSES =
  'absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium rounded-lg shadow-xs opacity-0 tooltip transition-opacity duration-300';

export const TOOLTIP_STYLES: Record<TooltipStyle, string> = {
  light: 'text-gray-900 bg-white border border-gray-200',
  dark: 'text-white bg-gray-900 dark:bg-gray-700',
};

export const TOOLTIP_ARROW_CLASSES = 'tooltip-arrow';
