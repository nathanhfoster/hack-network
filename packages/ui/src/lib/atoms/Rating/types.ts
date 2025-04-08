import type { ReactNode } from 'react';

export type RatingSize = 'sm' | 'md' | 'lg';
export type RatingColor = 'yellow' | 'green' | 'red' | 'blue' | 'purple';

export interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: RatingSize;
  color?: RatingColor;
  className?: string;
  starClassName?: string;
  label?: ReactNode;
  labelClassName?: string;
  disabled?: boolean;
  readonly?: boolean;
  onHover?: (value: number) => void;
  onLeave?: () => void;
}
