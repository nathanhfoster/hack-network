import type { TabVariant } from './types';

export const TAB_VARIANTS: Record<TabVariant, TabVariant> = {
  default: 'default',
  underline: 'underline',
  pills: 'pills',
};

interface TabStylesParams {
  isActive: boolean;
  isDisabled: boolean;
  variant?: TabVariant;
  fullWidth?: boolean;
}

export const getTabStyles = ({
  isActive,
  isDisabled,
  variant = 'default',
  fullWidth = false,
}: TabStylesParams) => {
  const baseStyles = 'inline-flex items-center justify-center p-4 rounded-t-lg';
  const widthStyles = fullWidth ? 'flex-1' : '';

  if (isDisabled) {
    return `${baseStyles} ${widthStyles} text-gray-400 cursor-not-allowed dark:text-gray-500`;
  }

  switch (variant) {
    case 'underline':
      return `${baseStyles} ${widthStyles} ${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
          : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
      } border-b-2 border-transparent`;

    case 'pills':
      return `${baseStyles} ${widthStyles} ${
        isActive
          ? 'text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-500'
          : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
      }`;

    default:
      return `${baseStyles} ${widthStyles} ${
        isActive
          ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
          : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
      }`;
  }
};
