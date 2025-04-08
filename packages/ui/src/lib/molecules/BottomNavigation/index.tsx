import { combineClassNames } from '../../../utils';
import { BottomNavigationProps } from './types';
import { FC } from 'react';
import {
  BOTTOM_NAVIGATION_ACTIVE_STYLES,
  BOTTOM_NAVIGATION_DISABLED_STYLES,
  BOTTOM_NAVIGATION_ICON_STYLES,
  BOTTOM_NAVIGATION_ITEM_STYLES,
  BOTTOM_NAVIGATION_LABEL_STYLES,
  BOTTOM_NAVIGATION_VARIANTS,
} from './constants';

const BottomNavigation: FC<BottomNavigationProps> = ({
  data,
  className,
  variant = 'default',
}) => {
  return (
    <div
      className={combineClassNames(
        'fixed bottom-0 left-0 z-50 w-full h-16',
        BOTTOM_NAVIGATION_VARIANTS[variant],
        className,
      )}
    >
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {data.map((item, index) => {
          const isActive = item.active;
          const isDisabled = item.disabled;
          const content = (
            <>
              {item.icon && (
                <div
                  className={combineClassNames(
                    BOTTOM_NAVIGATION_ICON_STYLES[variant],
                    isActive && BOTTOM_NAVIGATION_ACTIVE_STYLES[variant],
                  )}
                >
                  {item.icon}
                </div>
              )}
              {item.label && (
                <span
                  className={combineClassNames(
                    BOTTOM_NAVIGATION_LABEL_STYLES[variant],
                    isActive && BOTTOM_NAVIGATION_ACTIVE_STYLES[variant],
                  )}
                >
                  {item.label}
                </span>
              )}
            </>
          );

          if (item.href) {
            return (
              <a
                key={index}
                href={item.href}
                className={combineClassNames(
                  BOTTOM_NAVIGATION_ITEM_STYLES[variant],
                  isDisabled && BOTTOM_NAVIGATION_DISABLED_STYLES[variant],
                )}
                onClick={item.onClick}
                aria-disabled={isDisabled}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={index}
              type="button"
              className={combineClassNames(
                BOTTOM_NAVIGATION_ITEM_STYLES[variant],
                isDisabled && BOTTOM_NAVIGATION_DISABLED_STYLES[variant],
              )}
              onClick={item.onClick}
              disabled={isDisabled}
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
