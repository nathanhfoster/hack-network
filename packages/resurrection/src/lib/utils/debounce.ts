import type { GenericFunction } from '../types';
import isFunction from './isFunction';

export interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true,
};

/**
 * Creates a debounced function that delays invoking the provided function until after
 * the specified wait time has elapsed since the last time it was invoked.
 *
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @param options - Configuration options
 * @returns A debounced version of the provided function
 */
export function debounce<T extends GenericFunction>(
  func: T,
  wait = 400,
  options: DebounceOptions = defaultOptions,
): ((...args: Parameters<T>) => void) & {
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
} {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastArgs: Parameters<T> | undefined;
  let lastThis: any;
  let result: ReturnType<T> | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;
  let leading = false;
  let trailing = true;
  const maxWait =
    'maxWait' in options ? Math.max(+(options.maxWait ?? 0), wait) : undefined;

  if (!isFunction(func)) {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;
  leading = !!options.leading;
  trailing = 'trailing' in options ? !!options.trailing : trailing;

  function invokeFunc(time: number) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args as Parameters<T>);
    return result;
  }

  function leadingEdge(time: number) {
    lastInvokeTime = time;
    timeoutId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxWait === undefined
      ? timeWaiting
      : Math.min(timeWaiting, maxWait - timeSinceLastInvoke);
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timeoutId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time: number) {
    timeoutId = undefined;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timeoutId = undefined;
  }

  function flush() {
    return timeoutId === undefined ? result : trailingEdge(Date.now());
  }

  function debounced(this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeoutId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxWait !== undefined) {
        timeoutId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timeoutId === undefined) {
      timeoutId = setTimeout(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced;
}

export default debounce;
