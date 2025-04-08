'use client';

import { FC } from 'react';
import { combineClassNames } from '../../../utils';
import type { FilterChipProps } from './types';

const FilterChip: FC<FilterChipProps> = ({ label, onRemove, className }) => {
  return (
    <span
      className={combineClassNames(
        'inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100',
        className,
      )}
    >
      {label}
      <button
        type="button"
        className="group relative rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={onRemove}
      >
        <span className="sr-only">Remove {label}</span>
        <svg
          className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </span>
  );
};

export default FilterChip;
