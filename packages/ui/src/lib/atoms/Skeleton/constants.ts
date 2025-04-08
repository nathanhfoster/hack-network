import type { SkeletonVariant, SkeletonAnimation } from './types';

export const SKELETON_VARIANTS: Record<SkeletonVariant, string> = {
  text: 'h-2.5 bg-gray-200 rounded-full dark:bg-gray-700',
  circular: 'rounded-full bg-gray-200 dark:bg-gray-700',
  rectangular: 'bg-gray-200 dark:bg-gray-700',
};

export const SKELETON_ANIMATIONS: Record<SkeletonAnimation, string> = {
  pulse: 'animate-pulse',
  wave: 'animate-shimmer',
  none: '',
};

export const SKELETON_BASE_CLASSES = 'w-full';
