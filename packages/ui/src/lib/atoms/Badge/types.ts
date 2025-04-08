import type { ReactNode } from 'react';

export type BadgeColor =
  | 'default'
  | 'dark'
  | 'red'
  | 'green'
  | 'yellow'
  | 'indigo'
  | 'purple'
  | 'pink';
export type BadgeSize = 'xs' | 'sm';
export type BadgeVariant = 'default' | 'bordered' | 'pill';

export interface BadgeProps {
  children?: ReactNode;
  color?: BadgeColor;
  size?: BadgeSize;
  variant?: BadgeVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  icon?: ReactNode;
  iconOnly?: boolean;
}
