import { combineClassNames } from '../../../utils';
import type { InputProps } from './types';
import type { FC } from 'react';
import {
  INPUT_BASE_CLASSES,
  INPUT_DISABLED_CLASSES,
  INPUT_ERROR_CLASSES,
  INPUT_ICON_CLASSES,
  INPUT_LEFT_ICON_CLASSES,
  INPUT_RIGHT_ICON_CLASSES,
  INPUT_WITH_LEFT_ICON_CLASSES,
  INPUT_WITH_RIGHT_ICON_CLASSES,
  INPUT_WITH_BOTH_ICONS_CLASSES,
} from './constants';

const Input: FC<InputProps> = ({
  className,
  disabled,
  error,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const getInputClasses = () => {
    const classes = [INPUT_BASE_CLASSES];
    if (disabled) classes.push(INPUT_DISABLED_CLASSES);
    if (error) classes.push(INPUT_ERROR_CLASSES);
    if (leftIcon && rightIcon) classes.push(INPUT_WITH_BOTH_ICONS_CLASSES);
    else if (leftIcon) classes.push(INPUT_WITH_LEFT_ICON_CLASSES);
    else if (rightIcon) classes.push(INPUT_WITH_RIGHT_ICON_CLASSES);
    return combineClassNames(...classes, className);
  };

  return (
    <div className="relative w-full">
      {leftIcon && (
        <div
          className={combineClassNames(
            INPUT_ICON_CLASSES,
            INPUT_LEFT_ICON_CLASSES,
          )}
        >
          {leftIcon}
        </div>
      )}
      <input className={getInputClasses()} disabled={disabled} {...props} />
      {rightIcon && (
        <div
          className={combineClassNames(
            INPUT_ICON_CLASSES,
            INPUT_RIGHT_ICON_CLASSES,
          )}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
