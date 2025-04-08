import type { TimelineConnectorColor } from './types';

export const TIMELINE_CONNECTOR_COLORS: Record<
  TimelineConnectorColor,
  TimelineConnectorColor
> = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
};

export const TIMELINE_CONNECTOR_STYLES: Record<TimelineConnectorColor, string> =
  {
    default: 'border-gray-200 dark:border-gray-700',
    primary: 'border-blue-200 dark:border-blue-800',
    secondary: 'border-gray-300 dark:border-gray-600',
    accent: 'border-purple-200 dark:border-purple-800',
  };

export const TIMELINE_DOT_STYLES: Record<TimelineConnectorColor, string> = {
  default: 'bg-gray-200 dark:bg-gray-700',
  primary: 'bg-blue-200 dark:bg-blue-800',
  secondary: 'bg-gray-300 dark:bg-gray-600',
  accent: 'bg-purple-200 dark:bg-purple-800',
};
