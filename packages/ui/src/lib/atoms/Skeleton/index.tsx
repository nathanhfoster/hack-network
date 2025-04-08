'use client';

import { combineClassNames } from '../../../utils';
import type { SkeletonProps } from './types';
import {
  SKELETON_VARIANTS,
  SKELETON_ANIMATIONS,
  SKELETON_BASE_CLASSES,
} from './constants';

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  className,
  children,
}) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      role="status"
      className={combineClassNames(
        SKELETON_BASE_CLASSES,
        SKELETON_VARIANTS[variant],
        SKELETON_ANIMATIONS[animation],
        className,
      )}
      style={style}
    >
      {children && <span className="sr-only">{children}</span>}
    </div>
  );
};

export default Skeleton;
