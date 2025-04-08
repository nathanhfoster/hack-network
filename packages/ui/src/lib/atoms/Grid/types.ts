import { ReactNode } from 'react';

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: GridCols;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  sm?: GridCols;
  md?: GridCols;
  lg?: GridCols;
  xl?: GridCols;
  autoCols?: boolean;
  autoFlow?: 'row' | 'column' | 'row-dense' | 'column-dense';
}
