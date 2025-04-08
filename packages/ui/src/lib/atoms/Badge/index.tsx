import { combineClassNames } from '../../../utils';
import type { BadgeProps } from './types';
import type { FC } from 'react';
import {
  BADGE_BORDER_COLORS,
  BADGE_COLORS,
  BADGE_DISMISS_COLORS,
  BADGE_SIZES,
  BADGE_VARIANTS,
} from './constants';

const Badge: FC<BadgeProps> = ({
  children,
  color = 'default',
  size = 'xs',
  variant = 'default',
  dismissible = false,
  onDismiss,
  className,
  icon,
  iconOnly = false,
}) => {
  return (
    <span
      className={combineClassNames(
        'inline-flex items-center font-medium',
        BADGE_COLORS[color],
        BADGE_SIZES[size],
        BADGE_VARIANTS[variant],
        variant === 'bordered' && BADGE_BORDER_COLORS[color],
        className,
      )}
    >
      {icon && !iconOnly && <span className="mr-1">{icon}</span>}
      {!iconOnly && children}
      {icon && iconOnly && icon}
      {dismissible && (
        <button
          type="button"
          className={combineClassNames(
            'inline-flex items-center p-1 ms-2 text-sm bg-transparent rounded-xs',
            BADGE_DISMISS_COLORS[color],
          )}
          onClick={onDismiss}
          aria-label="Remove badge"
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      )}
    </span>
  );
};

export default Badge;
