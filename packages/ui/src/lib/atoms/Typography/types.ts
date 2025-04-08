import type { ReactNode, JSX } from 'react';
import { TYPOGRAPHY_VARIANTS, TYPOGRAPHY_COLORS } from './constants';

export type TypographyVariant =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];
export type TypographyColor =
  (typeof TYPOGRAPHY_COLORS)[keyof typeof TYPOGRAPHY_COLORS];

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  children: ReactNode;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
}
