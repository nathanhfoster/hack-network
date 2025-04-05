'use client';

import { isNotNotTrue } from '../utils';
import { useEffect } from 'react';

import useDebouncedCallback from './useDebouncedCallback';
import usePreviousValue from './usePreviousValue';

type Callback<T> = (previousValue?: T, value?: T) => any;
type Condition<T> = (previousValue?: T, value?: T) => boolean;

const useEffectAfterChange = <T = any>(
  value: T,
  callback: Callback<T> = () => undefined,
  condition: Condition<T> = (prev, curr) => isNotNotTrue(prev) && !curr,
  debounce = 0,
) => {
  const previousValue = usePreviousValue(value);

  const debouncedCallback = useDebouncedCallback(
    callback,
    [previousValue, value, callback],
    debounce,
  );

  useEffect(() => {
    if (condition(previousValue, value)) {
      debouncedCallback(previousValue, value);
    }
  }, [debouncedCallback, condition, previousValue, value]);
};

export default useEffectAfterChange;
