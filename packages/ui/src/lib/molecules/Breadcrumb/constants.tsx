import type { BreadcrumbVariant } from './types.js';

export const BREADCRUMB_VARIANTS: Record<BreadcrumbVariant, string> = {
  default: '',
  solid:
    'px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
};

export const BREADCRUMB_BASE_CLASSES = 'flex';
export const BREADCRUMB_LIST_CLASSES =
  'inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse';
export const BREADCRUMB_ITEM_CLASSES = 'inline-flex items-center';
export const BREADCRUMB_LINK_CLASSES =
  'inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white';
export const BREADCRUMB_SEPARATOR_CLASSES =
  'rtl:rotate-180 w-3 h-3 text-gray-400 mx-1';
export const BREADCRUMB_CURRENT_ITEM_CLASSES =
  'ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400';

export const DEFAULT_SEPARATOR = (
  <svg
    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
);

export const DEFAULT_HOME_ICON = (
  <svg
    className="w-3 h-3 me-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
  </svg>
);
