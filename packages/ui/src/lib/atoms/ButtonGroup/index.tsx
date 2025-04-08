import { combineClassNames } from '../../../utils';
import type { ButtonGroupProps, ButtonGroupItemProps } from './types';
import type { FC } from 'react';
import { BUTTON_GROUP_BASE_CLASSES } from './constants';
import React from 'react';

const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  size,
  variant = 'default',
}) => {
  const renderChildren = () => {
    if (!children) return null;

    const childrenArray = React.Children.toArray(children);
    return childrenArray.map((child, index) => {
      if (React.isValidElement<ButtonGroupItemProps>(child)) {
        return React.cloneElement(child, {
          isFirst: index === 0,
          isLast: index === childrenArray.length - 1,
          outline,
          size,
          variant,
        });
      }
      return child;
    });
  };

  return (
    <div className={combineClassNames(BUTTON_GROUP_BASE_CLASSES, className)}>
      {renderChildren()}
    </div>
  );
};

export default ButtonGroup;
