import { combineClassNames } from '../../../utils';
import type { AlertProps } from './types';
import type { FC } from 'react';
import {
  ALERT_BORDER_COLOR_STYLES,
  ALERT_COLORS,
  ALERT_COLOR_STYLES,
  ALERT_DISMISS_COLOR_STYLES,
  ALERT_VARIANTS,
} from './constants';

const Alert: FC<AlertProps> = ({
  title,
  children,
  color = ALERT_COLORS.default,
  variant = ALERT_VARIANTS.default,
  icon,
  dismissible,
  onDismiss,
  className,
}) => {
  const defaultIcon = (
    <svg
      className="shrink-0 inline w-4 h-4 me-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
  );

  return (
    <div
      role="alert"
      className={combineClassNames(
        'p-4 mb-4 text-sm rounded-lg',
        variant === ALERT_VARIANTS.bordered && 'border',
        ALERT_COLOR_STYLES[color],
        variant === ALERT_VARIANTS.bordered && ALERT_BORDER_COLOR_STYLES[color],
        className,
      )}
    >
      <div className="flex items-center">
        {icon || defaultIcon}
        <div>
          {title && <span className="font-medium">{title}</span>}
          <div>{children}</div>
        </div>
        {dismissible && (
          <button
            type="button"
            className={combineClassNames(
              'ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8',
              ALERT_DISMISS_COLOR_STYLES[color],
            )}
            onClick={onDismiss}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
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
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
