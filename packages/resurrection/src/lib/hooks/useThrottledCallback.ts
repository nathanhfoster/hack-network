'use client';

import throttle from '../utils/throttle';
import { type DependencyList, useCallback, useEffect, useRef } from 'react';

import { GenericFunction } from '../types';

import useWillUnmount from './useWillUnmount';

export interface ThrottleOptions {
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}

const defaultOptions: ThrottleOptions = {
  leading: false,
  trailing: true,
};

/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 300ms.
 */
const useThrottledCallback = <TCallback extends GenericFunction>(
  fn: TCallback,
  dependencies: DependencyList = [],
  wait = 400,
  options: ThrottleOptions = defaultOptions,
): TCallback => {
  const throttledFn = useRef<TCallback | null>(throttle<TCallback>(fn, wait, options));

  useEffect(() => {
    throttledFn.current = throttle(fn, wait, options);
  }, [fn, wait, options]);

  useWillUnmount(() => {
    throttledFn.current = null;
  });

  return useCallback((...args: Parameters<TCallback>) => {
    if (throttledFn.current) {
      return throttledFn.current(...args);
    }
  }, dependencies) as TCallback;
};

export default useThrottledCallback;
