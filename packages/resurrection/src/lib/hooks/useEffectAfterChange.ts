'use client';

import { isNotNotTrue } from '../utils';
import { useEffect, useCallback } from 'react';

import useDebouncedCallback from './useDebouncedCallback';
import usePreviousValue from './usePreviousValue';

type Callback<T> = (previousValue: T | undefined, value: T) => any;
type Condition<T> = (previousValue: T | undefined, value: T) => boolean;

const useEffectAfterChange = <T = unknown>(
  value: T,
  callback: Callback<T> = () => undefined,
  condition: Condition<T> = (prev, curr) => isNotNotTrue(prev) && !curr,
  debounce = 400
) => {
  const previousValue = usePreviousValue(value);

  // Memoize the condition check to prevent unnecessary recreations
  const memoizedCallback = useCallback(
    (prev: T | undefined, curr: T) => {
      if (condition(prev, curr)) {
        callback(prev, curr);
      }
    },
    [callback, condition]
  );

  const debouncedCallback = useDebouncedCallback(
    memoizedCallback,
    [], // Empty dependencies since we're using memoized callback
    debounce
  );

  useEffect(() => {
    debouncedCallback(previousValue, value);
  }, [debouncedCallback, previousValue, value]);
};

export default useEffectAfterChange;
