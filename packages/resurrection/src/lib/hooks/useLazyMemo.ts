'use client';

import { useCallback, useRef } from 'react';

const DEFAULT_VALUE = null;

/**
 * A custom hook that lazily initializes and memoizes a value using the provided initializer function.
 * The initializer function is only called once, and the result is cached for subsequent calls.
 *
 * {@link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily ReactDocs}
 * @param initializer - A function that returns the value to be memoized. This function is only executed
 * once, and its result is stored for future use.
 * @returns The memoized value returned by the initializer function.
 *
 * @example
 * ```tsx
 * const expensiveValue = useLazyMemo(() => computeExpensiveValue());
 * ```
 *
 * @remarks
 * - This hook is useful when you want to defer the computation of a value until it is actually needed,
 * while ensuring that the computation only happens once.
 * - The `initializer` function should not depend on any external state that might change, as it is only
 * executed once and its result is cached.
 */
const useLazyMemo = (initializer: () => any) => {
  const ref = useRef(DEFAULT_VALUE);

  const getObservable = useCallback(() => {
    const observer = ref.current;

    if (observer !== DEFAULT_VALUE) {
      return observer;
    }

    const newObserver = initializer();

    ref.current = newObserver;

    return newObserver;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getObservable();
};

export default useLazyMemo;
