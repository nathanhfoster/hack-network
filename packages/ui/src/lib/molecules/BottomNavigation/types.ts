import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';
export interface BottomNavigationItem {
  label: string;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export type BottomNavigationVariant =
  | 'default'
  | 'bordered'
  | 'app-bar'
  | 'pagination'
  | 'button-group'
  | 'card'
  | 'meeting'
  | 'video';

export interface BottomNavigationProps
  extends DataComponent<BottomNavigationItem> {
  className?: string;
  variant?: BottomNavigationVariant;
}
