'use client';

import { type DependencyList, useCallback, useEffect, useRef } from 'react';

import { GenericFunction } from '../types';
import debounce, { type DebounceOptions } from '../utils/debounce';

import useWillUnmount from './useWillUnmount';

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true,
};

/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 400ms.
 */
const useDebouncedCallback = <TCallback extends GenericFunction>(
  fn: TCallback,
  dependencies: DependencyList = [],
  wait = 400,
  options: DebounceOptions = defaultOptions,
) => {
  const debounced = useRef(debounce<TCallback>(fn, wait, options));

  useEffect(() => {
    debounced.current = debounce(fn, wait, options);
  }, [fn, wait, options]);

  useWillUnmount(() => {
    debounced.current?.cancel();
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounced.current, dependencies);
};

export default useDebouncedCallback;
