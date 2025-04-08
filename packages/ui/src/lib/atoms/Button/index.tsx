import { combineClassNames } from '../../../utils';
import type { ButtonProps } from './types';
import type { FC } from 'react';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_BASE_CLASSES,
  BUTTON_LOADING_SPINNER,
} from './constants';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  pill = false,
  className,
  disabled,
  gradientFrom,
  gradientTo,
  gradientHoverFrom,
  gradientHoverTo,
  gradientText,
  gradientDuotoneFrom,
  gradientDuotoneTo,
  gradientDuotoneHoverFrom,
  gradientDuotoneHoverTo,
  gradientOutlineFrom,
  gradientOutlineTo,
  gradientOutlineHoverFrom,
  gradientOutlineHoverTo,
  gradientOutlineText,
  ...props
}) => {
  const getGradientClasses = () => {
    if (variant === 'gradient' && gradientFrom && gradientTo) {
      return `bg-gradient-to-r from-${gradientFrom} to-${gradientTo} hover:from-${gradientHoverFrom || gradientFrom} hover:to-${gradientHoverTo || gradientTo}`;
    }
    if (
      variant === 'gradientDuotone' &&
      gradientDuotoneFrom &&
      gradientDuotoneTo
    ) {
      return `bg-gradient-to-r from-${gradientDuotoneFrom} to-${gradientDuotoneTo} hover:from-${gradientDuotoneHoverFrom || gradientDuotoneFrom} hover:to-${gradientDuotoneHoverTo || gradientDuotoneTo}`;
    }
    if (
      variant === 'gradientOutline' &&
      gradientOutlineFrom &&
      gradientOutlineTo
    ) {
      return `border border-${gradientOutlineFrom} hover:bg-gradient-to-r hover:from-${gradientOutlineHoverFrom || gradientOutlineFrom} hover:to-${gradientOutlineHoverTo || gradientOutlineTo}`;
    }
    return '';
  };

  return (
    <button
      className={combineClassNames(
        BUTTON_BASE_CLASSES,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        fullWidth && 'w-full',
        pill && 'rounded-full',
        getGradientClasses(),
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && BUTTON_LOADING_SPINNER}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
