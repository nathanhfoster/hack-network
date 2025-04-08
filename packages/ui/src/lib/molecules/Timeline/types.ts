import type { ReactNode } from 'react';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';
import type { DataComponent } from '../../../types';

export type TimelineConnectorColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent';

export type TimelineVariant =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  cta?: {
    label: string;
    href: string;
  };
}

export interface TimelineProps extends DataComponent<TimelineItem> {
  variant?: TimelineVariant;
  className?: string;
  showConnector?: boolean;
  connectorColor?: TimelineConnectorColor;
}
