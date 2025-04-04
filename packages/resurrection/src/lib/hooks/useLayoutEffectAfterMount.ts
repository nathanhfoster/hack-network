'use client';

import { isClientSide } from '../utils';
import {
  DependencyList,
  EffectCallback,
  useEffect,
  useLayoutEffect,
} from 'react';

import useIsMounted from './useIsMounted';

const useLayoutEffectAfterMount = (
  callback: EffectCallback,
  dependencies: DependencyList,
) => {
  const mounted = useIsMounted();
  const useIsomorphicLayoutEffect = isClientSide()
    ? useLayoutEffect
    : useEffect;

  useIsomorphicLayoutEffect(
    () => (mounted ? callback() : undefined),
    dependencies,
  );

  return mounted;
};

export default useLayoutEffectAfterMount;
