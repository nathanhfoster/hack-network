'use client';

import { FC } from 'react';
import { combineClassNames } from '../../../utils';
import type { FilterGroupProps } from './types';
import {
  FILTER_GROUP_BASE_CLASSES,
  FILTER_GROUP_LABEL_CLASSES,
  FILTER_GROUP_OPTIONS_CLASSES,
  FILTER_GROUP_OPTION_CLASSES,
  FILTER_GROUP_CHECKBOX_CLASSES,
  FILTER_GROUP_LABEL_TEXT_CLASSES,
  FILTER_GROUP_COUNT_CLASSES,
} from './constants';

const FilterGroup: FC<FilterGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  className,
  children,
}) => {
  const handleChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  return (
    <div className={combineClassNames(FILTER_GROUP_BASE_CLASSES, className)}>
      <label className={FILTER_GROUP_LABEL_CLASSES}>{label}</label>
      <div className={FILTER_GROUP_OPTIONS_CLASSES}>
        {options.map((option) => (
          <label key={option.value} className={FILTER_GROUP_OPTION_CLASSES}>
            <input
              type="checkbox"
              className={FILTER_GROUP_CHECKBOX_CLASSES}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <span className={FILTER_GROUP_LABEL_TEXT_CLASSES}>
              {option.label}
            </span>
            {option.count !== undefined && (
              <span className={FILTER_GROUP_COUNT_CLASSES}>
                ({option.count})
              </span>
            )}
          </label>
        ))}
        {children}
      </div>
    </div>
  );
};

export default FilterGroup;
