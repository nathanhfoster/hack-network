'use client';

import { FC } from 'react';
import { combineClassNames } from '../../../utils';
import type { GridProps } from './types';
import {
  GRID_BASE_CLASSES,
  GRID_GAP_CLASSES,
  GRID_COLS_CLASSES,
  GRID_SM_COLS_CLASSES,
  GRID_MD_COLS_CLASSES,
  GRID_LG_COLS_CLASSES,
  GRID_XL_COLS_CLASSES,
  GRID_AUTO_FLOW_CLASSES,
} from './constants';

const Grid: FC<GridProps> = ({
  children,
  className,
  cols = 1,
  gap = 4,
  sm,
  md,
  lg,
  xl,
  autoCols = false,
  autoFlow = 'row',
}) => {
  const classes = [
    GRID_BASE_CLASSES,
    GRID_GAP_CLASSES[gap],
    autoCols ? 'auto-cols-auto' : GRID_COLS_CLASSES[cols],
    sm && (autoCols ? 'sm:auto-cols-auto' : GRID_SM_COLS_CLASSES[sm]),
    md && (autoCols ? 'md:auto-cols-auto' : GRID_MD_COLS_CLASSES[md]),
    lg && (autoCols ? 'lg:auto-cols-auto' : GRID_LG_COLS_CLASSES[lg]),
    xl && (autoCols ? 'xl:auto-cols-auto' : GRID_XL_COLS_CLASSES[xl]),
    GRID_AUTO_FLOW_CLASSES[autoFlow],
    className,
  ].filter(Boolean);

  return <div className={combineClassNames(...classes)}>{children}</div>;
};

export default Grid;
