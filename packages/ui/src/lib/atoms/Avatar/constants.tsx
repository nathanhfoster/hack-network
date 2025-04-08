import type { AvatarShape, AvatarSize, AvatarStatus } from './types';

export type AvatarStatusPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
export type AvatarBorderStyle = 'default' | 'primary' | 'secondary';
export type AvatarStackedStyle = 'default' | 'rtl';

export const AVATAR_SIZES: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-36 h-36',
};

export const AVATAR_SHAPES: Record<AvatarShape, string> = {
  rounded: 'rounded',
  'rounded-full': 'rounded-full',
  'rounded-sm': 'rounded-sm',
};

export const AVATAR_STATUS_STYLES: Record<AvatarStatus, string> = {
  online: 'bg-green-400 border-2 border-white dark:border-gray-800',
  offline: 'bg-red-400 border-2 border-white dark:border-gray-800',
  away: 'bg-yellow-400 border-2 border-white dark:border-gray-800',
  busy: 'bg-gray-400 border-2 border-white dark:border-gray-800',
};

export const AVATAR_STATUS_POSITIONS: Record<AvatarStatusPosition, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

export const AVATAR_BORDER_STYLES: Record<AvatarBorderStyle, string> = {
  default: 'border-2 border-white dark:border-gray-800',
  primary: 'border-2 border-blue-500 dark:border-blue-400',
  secondary: 'border-2 border-gray-500 dark:border-gray-400',
};

export const AVATAR_STACKED_STYLES: Record<AvatarStackedStyle, string> = {
  default: '-space-x-4',
  rtl: 'space-x-reverse -space-x-4',
};

export const DEFAULT_AVATAR = (
  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg
      className="w-10 h-10 text-gray-400 -left-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
