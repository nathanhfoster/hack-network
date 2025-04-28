import type { GenericFunction } from '../types';

/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `wait` milliseconds.
 */
const throttle = <T extends GenericFunction>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {},
): T => {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    if (!previous && !leading) previous = now;
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      return func.apply(this, args);
    }

    if (!timeout && trailing) {
      timeout = setTimeout(() => {
        previous = !leading ? 0 : Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  } as T;
};

export default throttle;
