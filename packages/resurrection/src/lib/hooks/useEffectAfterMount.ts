'use client';

import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export default function useEffectAfterMount(effect: EffectCallback, deps?: DependencyList) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return effect();
  }, deps);
}
