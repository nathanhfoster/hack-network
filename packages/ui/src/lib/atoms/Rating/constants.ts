import type { RatingSize, RatingColor } from './types';

export const RATING_SIZES: Record<RatingSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export const RATING_COLORS: Record<RatingColor, string> = {
  yellow: 'text-yellow-300',
  green: 'text-green-300',
  red: 'text-red-300',
  blue: 'text-blue-300',
  purple: 'text-purple-300',
};

export const RATING_BASE_CLASSES = 'flex items-center';
export const RATING_STAR_BASE_CLASSES = 'cursor-pointer';
export const RATING_STAR_DISABLED_CLASSES = 'cursor-not-allowed';
export const RATING_LABEL_BASE_CLASSES = 'ml-2 text-sm font-medium';
