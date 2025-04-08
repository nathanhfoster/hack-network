'use client';

import { useState } from 'react';
import { combineClassNames } from '../../../utils';
import type { RatingProps } from './types';
import {
  RATING_SIZES,
  RATING_COLORS,
  RATING_BASE_CLASSES,
  RATING_STAR_BASE_CLASSES,
  RATING_STAR_DISABLED_CLASSES,
  RATING_LABEL_BASE_CLASSES,
} from './constants';

const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  size = 'md',
  color = 'yellow',
  className,
  starClassName,
  label,
  labelClassName,
  disabled = false,
  readonly = false,
  onHover,
  onLeave,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (starValue: number) => {
    if (disabled || readonly) return;
    onChange?.(starValue);
  };

  const handleMouseEnter = (starValue: number) => {
    if (disabled || readonly) return;
    setHoverValue(starValue);
    onHover?.(starValue);
  };

  const handleMouseLeave = () => {
    if (disabled || readonly) return;
    setHoverValue(null);
    onLeave?.();
  };

  const getStarColor = (starValue: number) => {
    if (hoverValue !== null) {
      return starValue <= hoverValue ? RATING_COLORS[color] : 'text-gray-300';
    }
    return starValue <= value ? RATING_COLORS[color] : 'text-gray-300';
  };

  return (
    <div
      className={combineClassNames(RATING_BASE_CLASSES, className)}
      onMouseLeave={handleMouseLeave}
    >
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className={combineClassNames(
            RATING_STAR_BASE_CLASSES,
            RATING_SIZES[size],
            getStarColor(star),
            disabled && RATING_STAR_DISABLED_CLASSES,
            starClassName,
          )}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          disabled={disabled || readonly}
          aria-label={`Rate ${star} stars`}
        >
          <svg
            className="w-full h-full"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </button>
      ))}
      {label && (
        <span
          className={combineClassNames(
            RATING_LABEL_BASE_CLASSES,
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Rating;
