import type { ModalSize, ModalColor } from './types';

export const MODAL_SIZES: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export const MODAL_COLORS: Record<ModalColor, string> = {
  blue: 'text-blue-500 dark:text-blue-400',
  green: 'text-green-500 dark:text-green-400',
  red: 'text-red-500 dark:text-red-400',
  yellow: 'text-yellow-500 dark:text-yellow-400',
  purple: 'text-purple-500 dark:text-purple-400',
  gray: 'text-gray-500 dark:text-gray-400',
};

export const MODAL_BASE_CLASSES =
  'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center';
export const MODAL_BACKDROP_CLASSES =
  'fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 transition-opacity';
export const MODAL_CONTENT_CLASSES =
  'relative bg-white rounded-lg shadow dark:bg-gray-700 w-full';
export const MODAL_HEADER_CLASSES =
  'flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600';
export const MODAL_BODY_CLASSES = 'p-4 md:p-5 space-y-4';
export const MODAL_FOOTER_CLASSES =
  'flex items-center justify-end p-4 md:p-5 border-t rounded-b dark:border-gray-600';
export const MODAL_CLOSE_BUTTON_CLASSES =
  'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white';
