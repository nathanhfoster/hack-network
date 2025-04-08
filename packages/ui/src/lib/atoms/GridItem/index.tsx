'use client';

import { FC } from 'react';
import { combineClassNames } from '../../../utils';
import { GridItemProps } from './types';
import {
  GRID_ITEM_BASE_CLASSES,
  GRID_ITEM_SPAN_CLASSES,
  GRID_ITEM_SM_SPAN_CLASSES,
  GRID_ITEM_MD_SPAN_CLASSES,
  GRID_ITEM_LG_SPAN_CLASSES,
  GRID_ITEM_XL_SPAN_CLASSES,
  GRID_ITEM_START_CLASSES,
  GRID_ITEM_END_CLASSES,
  GRID_ITEM_SM_START_CLASSES,
  GRID_ITEM_SM_END_CLASSES,
  GRID_ITEM_MD_START_CLASSES,
  GRID_ITEM_MD_END_CLASSES,
  GRID_ITEM_LG_START_CLASSES,
  GRID_ITEM_LG_END_CLASSES,
  GRID_ITEM_XL_START_CLASSES,
  GRID_ITEM_XL_END_CLASSES,
} from './constants';

export const GridItem: FC<GridItemProps> = ({
  children,
  className,
  span,
  sm,
  md,
  lg,
  xl,
  start,
  end,
  smStart,
  smEnd,
  mdStart,
  mdEnd,
  lgStart,
  lgEnd,
  xlStart,
  xlEnd,
}) => {
  const classes = [
    GRID_ITEM_BASE_CLASSES,
    span && GRID_ITEM_SPAN_CLASSES[span],
    sm && GRID_ITEM_SM_SPAN_CLASSES[sm],
    md && GRID_ITEM_MD_SPAN_CLASSES[md],
    lg && GRID_ITEM_LG_SPAN_CLASSES[lg],
    xl && GRID_ITEM_XL_SPAN_CLASSES[xl],
    start && GRID_ITEM_START_CLASSES[start],
    end && GRID_ITEM_END_CLASSES[end],
    smStart && GRID_ITEM_SM_START_CLASSES[smStart],
    smEnd && GRID_ITEM_SM_END_CLASSES[smEnd],
    mdStart && GRID_ITEM_MD_START_CLASSES[mdStart],
    mdEnd && GRID_ITEM_MD_END_CLASSES[mdEnd],
    lgStart && GRID_ITEM_LG_START_CLASSES[lgStart],
    lgEnd && GRID_ITEM_LG_END_CLASSES[lgEnd],
    xlStart && GRID_ITEM_XL_START_CLASSES[xlStart],
    xlEnd && GRID_ITEM_XL_END_CLASSES[xlEnd],
    className,
  ];

  return <div className={combineClassNames(...classes)}>{children}</div>;
};

export default GridItem;
