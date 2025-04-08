import { combineClassNames } from '../../../utils';
import type { BannerProps } from './types';
import type { FC } from 'react';
import {
  BANNER_BORDER_COLORS,
  BANNER_BUTTON_COLORS,
  BANNER_DISMISS_COLORS,
  BANNER_ICON_BG_COLORS,
  BANNER_ICON_COLORS,
  BANNER_POSITIONS,
  BANNER_SECONDARY_BUTTON_COLORS,
  BANNER_TEXT_COLORS,
  BANNER_VARIANTS,
} from './constants';

const Banner: FC<BannerProps> = ({
  children,
  position = 'top',
  variant = 'default',
  dismissible = false,
  onDismiss,
  className,
  icon,
  title,
  cta,
  secondaryCta,
  form,
}) => {
  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className={combineClassNames(
        'z-50 flex justify-between w-full p-4',
        BANNER_POSITIONS[position],
        BANNER_VARIANTS[variant],
        BANNER_BORDER_COLORS[variant],
        className,
      )}
    >
      <div className="flex items-center mx-auto">
        {icon && (
          <span
            className={combineClassNames(
              'inline-flex p-1 me-3 rounded-full w-6 h-6 items-center justify-center shrink-0',
              BANNER_ICON_BG_COLORS[variant],
            )}
          >
            <span className={BANNER_ICON_COLORS[variant]}>{icon}</span>
          </span>
        )}
        <p
          className={combineClassNames(
            'flex items-center text-sm font-normal',
            BANNER_TEXT_COLORS[variant],
          )}
        >
          {title && <span className="font-semibold me-2">{title}</span>}
          {children}
        </p>
      </div>
      <div className="flex items-center shrink-0">
        {form && (
          <form className="flex flex-col items-center w-full md:flex-row">
            <label
              htmlFor="email"
              className="shrink-0 mb-2 me-auto text-sm font-medium md:mb-0 md:me-4 md:m-0"
            >
              {form.label}
            </label>
            <input
              type="email"
              id="email"
              placeholder={form.placeholder}
              className="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:me-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className={combineClassNames(
                'font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center',
                BANNER_BUTTON_COLORS[variant],
              )}
            >
              {form.buttonLabel}
            </button>
          </form>
        )}
        {!form && (
          <>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={combineClassNames(
                  'inline-flex items-center justify-center px-3 py-2 me-3 text-xs font-medium rounded-lg focus:outline-none focus:ring-4',
                  BANNER_SECONDARY_BUTTON_COLORS[variant],
                )}
              >
                {secondaryCta.icon && (
                  <span className="me-2">{secondaryCta.icon}</span>
                )}
                {secondaryCta.label}
              </a>
            )}
            {cta && (
              <a
                href={cta.href}
                className={combineClassNames(
                  'inline-flex items-center justify-center px-3 py-2 me-2 text-xs font-medium rounded-lg focus:outline-none focus:ring-4',
                  BANNER_BUTTON_COLORS[variant],
                )}
              >
                {cta.label}
                {cta.icon && (
                  <span className="ms-2 rtl:rotate-180">{cta.icon}</span>
                )}
              </a>
            )}
          </>
        )}
        {dismissible && (
          <button
            data-dismiss-target="#sticky-banner"
            type="button"
            className={combineClassNames(
              'shrink-0 inline-flex justify-center w-7 h-7 items-center rounded-lg text-sm p-1.5',
              BANNER_DISMISS_COLORS[variant],
            )}
            onClick={onDismiss}
            aria-label="Close banner"
          >
            <svg
              className="w-3 h-3"
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
            <span className="sr-only">Close banner</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
