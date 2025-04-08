import { combineClassNames } from '../../../utils';
import type { TimelineProps } from './types';
import type { FC } from 'react';
import Typography from '../../atoms/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';
import {
  TIMELINE_CONNECTOR_COLORS,
  TIMELINE_CONNECTOR_STYLES,
  TIMELINE_DOT_STYLES,
} from './constants';

const Timeline: FC<TimelineProps> = ({
  data,
  variant = TYPOGRAPHY_VARIANTS.body2,
  className,
  showConnector = true,
  connectorColor = TIMELINE_CONNECTOR_COLORS.default,
}) => {
  return (
    <ol
      className={combineClassNames(
        'relative',
        showConnector && 'border-s',
        showConnector && TIMELINE_CONNECTOR_STYLES[connectorColor],
        className,
      )}
    >
      {data.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div
            className={combineClassNames(
              'absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900',
              TIMELINE_DOT_STYLES[connectorColor],
            )}
          />
          {item.icon && (
            <div className="absolute -start-1.5 mt-1">{item.icon}</div>
          )}
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.date}
          </time>
          <Typography
            variant={TYPOGRAPHY_VARIANTS.h3}
            className="text-lg font-semibold"
          >
            {item.title}
          </Typography>
          {item.description && (
            <Typography variant={variant} className="mb-4">
              {item.description}
            </Typography>
          )}
          {item.cta && (
            <a
              href={item.cta.href}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {item.cta.label}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
