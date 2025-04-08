import type { ReactNode } from 'react';

export type AlertColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark';

export type AlertVariant = 'default' | 'bordered' | 'with-list';

export interface AlertProps {
  title?: string;
  children: ReactNode;
  color?: AlertColor;
  variant?: AlertVariant;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}
