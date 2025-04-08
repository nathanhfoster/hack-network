import { ReactNode } from 'react';
import { GridCols } from '../Grid/types';

export interface GridItemProps {
  children: ReactNode;
  className?: string;
  span?: GridCols;
  sm?: GridCols;
  md?: GridCols;
  lg?: GridCols;
  xl?: GridCols;
  start?: GridCols;
  end?: GridCols;
  smStart?: GridCols;
  smEnd?: GridCols;
  mdStart?: GridCols;
  mdEnd?: GridCols;
  lgStart?: GridCols;
  lgEnd?: GridCols;
  xlStart?: GridCols;
  xlEnd?: GridCols;
}
