'use client';

import { useRef, useEffect } from 'react';

export default function usePreviousValue<T>(
  value: T | undefined,
): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
