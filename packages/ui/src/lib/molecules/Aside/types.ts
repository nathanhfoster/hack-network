import type { ReactNode } from 'react';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

export type AsideVariant =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];
export type AsidePosition = 'left' | 'right';
export type AsideBackgroundColor =
  | 'white'
  | 'gray'
  | 'dark'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent';
export interface AsideProps {
  title?: string;
  content: ReactNode;
  variant?: AsideVariant;
  position?: AsidePosition;
  className?: string;
  icon?: ReactNode;
  isSticky?: boolean;
  backgroundColor?: AsideBackgroundColor;
}
