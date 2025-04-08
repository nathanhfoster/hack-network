import { combineClassNames } from '../../../utils';
import type { ButtonGroupItemProps } from './types';
import type { FC } from 'react';
import {
  BUTTON_GROUP_ITEM_BASE_CLASSES,
  BUTTON_GROUP_ITEM_STYLES,
  BUTTON_GROUP_ITEM_POSITION_CLASSES,
  BUTTON_GROUP_OUTLINE_STYLES,
} from './constants';

const ButtonGroupItem: FC<ButtonGroupItemProps> = ({
  children,
  className,
  isFirst,
  isLast,
  isActive,
  outline,
  variant = 'default',
  ...props
}) => {
  const getPositionClasses = () => {
    if (isFirst) return BUTTON_GROUP_ITEM_POSITION_CLASSES.first;
    if (isLast) return BUTTON_GROUP_ITEM_POSITION_CLASSES.last;
    return BUTTON_GROUP_ITEM_POSITION_CLASSES.middle;
  };

  const getStyles = () => {
    if (outline) {
      return isActive
        ? BUTTON_GROUP_OUTLINE_STYLES.active
        : BUTTON_GROUP_OUTLINE_STYLES.default;
    }
    return BUTTON_GROUP_ITEM_STYLES[variant];
  };

  return (
    <button
      className={combineClassNames(
        BUTTON_GROUP_ITEM_BASE_CLASSES,
        getPositionClasses(),
        getStyles(),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonGroupItem;
