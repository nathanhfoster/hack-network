import type { TabVariant } from './types';

interface TabStylesProps {
  variant: TabVariant;
  isActive: boolean;
  isDisabled: boolean;
  fullWidth: boolean;
}

export const getTabStyles = ({
  variant,
  isActive,
  isDisabled,
  fullWidth,
}: TabStylesProps): string => {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors duration-200';
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = isDisabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const variantStyles = {
    default: isActive
      ? 'bg-gray-100 text-gray-900'
      : 'text-gray-600 hover:bg-gray-50',
    primary: isActive
      ? 'bg-blue-600 text-white'
      : 'text-blue-600 hover:bg-blue-50',
    secondary: isActive
      ? 'bg-gray-800 text-white'
      : 'text-gray-800 hover:bg-gray-100',
    underline: isActive
      ? 'border-b-2 border-blue-600 text-blue-600'
      : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600',
    pills: isActive
      ? 'bg-blue-600 text-white rounded-full'
      : 'text-gray-600 hover:bg-blue-50 rounded-full',
  }[variant];

  return `${baseStyles} ${widthStyles} ${disabledStyles} ${variantStyles}`;
};
