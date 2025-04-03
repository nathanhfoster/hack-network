'use client';

import { isFunction, isNull } from '../utils';
import { ComponentType, RefObject, useMemo, useRef, JSX } from 'react';
import { ComponentPropsType, EqualityFunctionType } from '../connect/types';
import usePreviousValue from './usePreviousValue';

export interface useMemoComponentOptions<P extends ComponentPropsType> {
  Component: ComponentType<P>;
  props: P;
  ref?: RefObject<P>;
  isEqual?: EqualityFunctionType<P>;
}

export type useMemoComponentType = <P extends ComponentPropsType>(
  options: useMemoComponentOptions<P>,
) => JSX.Element | null;

/**
 * A custom hook that memoizes a React component based on its props and an optional equality function.
 * This hook ensures that the component is only re-rendered when its props change, improving performance
 * by avoiding unnecessary renders.
 *
 * @template P - The type of the component's props.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {React.ComponentType<P>} params.Component - The React component to be memoized.
 * @param {P} params.props - The props to be passed to the component.
 * @param {React.Ref<P>} [params.ref] - Optional ref to be forwarded to the component.
 * @param {(prevProps: P | undefined, nextProps: P) => boolean} [params.isEqual] -
 *        An optional function to determine if the previous and next props are equal.
 *        If not provided, props are assumed to always be unequal.
 *
 * @returns {JSX.Element | null} - The memoized React component.
 */
const useMemoComponent: useMemoComponentType = ({
  Component,
  props,
  ref,
  isEqual,
}) => {
  const previousProps = usePreviousValue(props);
  const componentRef = useRef<JSX.Element | null>(null);

  // Determine if props have changed
  const arePropsEqual = useMemo(() => {
    if (!isFunction(isEqual) || !previousProps) {
      return false;
    }
    return isEqual(previousProps, props);
  }, [isEqual, previousProps, props]);

  // Only create a new component instance when props change or it's the first render
  const PureComponent = useMemo(() => {
    if (!arePropsEqual || isNull(componentRef.current)) {
      componentRef.current = <Component {...props} ref={ref} />;
    }
    return componentRef.current;
  }, [Component, props, arePropsEqual, ref]);

  return PureComponent;
};

export default useMemoComponent;
