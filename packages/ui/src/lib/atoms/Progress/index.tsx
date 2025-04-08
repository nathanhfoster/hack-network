import { combineClassNames } from '../../../utils';
import type { ProgressProps } from './types';
import type { FC } from 'react';
import {
  PROGRESS_COLORS,
  PROGRESS_COLOR_STYLES,
  PROGRESS_LABEL_COLOR_STYLES,
  PROGRESS_LABEL_POSITIONS,
  PROGRESS_SIZES,
  PROGRESS_SIZE_STYLES,
} from './constants';

const Progress: FC<ProgressProps> = ({
  value,
  max = 100,
  size = PROGRESS_SIZES.md,
  color = PROGRESS_COLORS.default,
  labelPosition = PROGRESS_LABEL_POSITIONS.none,
  label,
  showValue = true,
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const displayValue = `${Math.round(percentage)}%`;

  const renderLabel = () => {
    if (labelPosition === PROGRESS_LABEL_POSITIONS.none) return null;

    const labelContent = (
      <span
        className={combineClassNames(
          'text-sm font-medium',
          PROGRESS_LABEL_COLOR_STYLES[color],
        )}
      >
        {label || displayValue}
      </span>
    );

    if (labelPosition === PROGRESS_LABEL_POSITIONS.inside) {
      return (
        <div
          className={combineClassNames(
            'text-xs font-medium text-center p-0.5 leading-none rounded-full',
            'text-blue-100 bg-blue-600',
          )}
          style={{ width: `${percentage}%` }}
        >
          {showValue && displayValue}
        </div>
      );
    }

    return (
      <div className="flex justify-between mb-1">
        {labelContent}
        {showValue && (
          <span
            className={combineClassNames(
              'text-sm font-medium',
              PROGRESS_LABEL_COLOR_STYLES[color],
            )}
          >
            {displayValue}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={className}>
      {labelPosition === PROGRESS_LABEL_POSITIONS.outside && renderLabel()}
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={combineClassNames(
            'rounded-full',
            PROGRESS_SIZE_STYLES[size],
            PROGRESS_COLOR_STYLES[color],
          )}
          style={{ width: `${percentage}%` }}
        >
          {labelPosition === PROGRESS_LABEL_POSITIONS.inside && renderLabel()}
        </div>
      </div>
    </div>
  );
};

export default Progress;
