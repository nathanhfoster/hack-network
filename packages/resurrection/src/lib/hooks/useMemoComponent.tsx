'use client';

import { ComponentType, Ref, useMemo, useRef, JSX } from 'react';
import { ComponentPropsType, EqualityFunctionType } from '../connect/types';
import usePreviousValue from './usePreviousValue';

export interface useMemoComponentOptions<P extends ComponentPropsType> {
  Component: ComponentType<P>;
  props: P;
  ref?: Ref<any>;
  isEqual?: EqualityFunctionType<P>;
}

export type useMemoComponentType = <P extends ComponentPropsType>(
  options: useMemoComponentOptions<P>,
) => JSX.Element | null;

const useMemoComponent: useMemoComponentType = ({
  Component,
  props,
  ref,
  isEqual,
}) => {
  // Keep previous props via custom hook
  const previousProps = usePreviousValue(props);

  // Compare props only when equality fn provided and previous exist
  const shouldUpdate = useMemo(() => {
    if (!isEqual || !previousProps) return true;
    return !isEqual(previousProps, props);
  }, [isEqual, previousProps, props]);

  // Store rendered element
  const elementRef = useRef<JSX.Element | null>(null);

  // Re-render only when shouldUpdate is true
  if (shouldUpdate || elementRef.current === null) {
    elementRef.current = <Component {...props} ref={ref} />;
  }

  return elementRef.current;
};

export default useMemoComponent;
