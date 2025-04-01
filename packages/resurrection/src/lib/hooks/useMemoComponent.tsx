'use client';

import { isFunction } from '../utils';
import { ComponentType, RefObject, useMemo, useRef, JSX } from 'react';
import { ComponentPropsType, EqualityFunctionType } from '../connect/types';
import usePreviousValue from './usePreviousValue';

export interface useMemoComponentOptions<P extends ComponentPropsType> {
  Component: ComponentType<P>;
  props: P;
  ref: RefObject<P> | undefined;
  isEqual: EqualityFunctionType<P> | undefined;
}

export type useMemoComponentType = <P extends ComponentPropsType>(
  options: useMemoComponentOptions<P>,
) => JSX.Element | null;

/**
 * Hook that controls the reference of a component to only update when it's previous and next props differ
 */
/**
 * A custom hook that memoizes a React component based on its props and an optional equality function.
 * This hook ensures that the component is only re-rendered when its props change, improving performance
 * by avoiding unnecessary renders.
 *
 * @template P - The type of the component's props.
 * @template R - The type of the ref passed to the component.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {React.ComponentType<P>} params.Component - The React component to be memoized.
 * @param {P} params.props - The props to be passed to the component.
 * @param {React.Ref<R>} params.ref - The ref to be forwarded to the component.
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

  // Initialize ref once for the component instance
  const ComponentRef = useRef<JSX.Element | null>(
    <Component {...props} ref={ref} />,
  );

  const PureComponent = useMemo(() => {
    // Determine if props have changed
    const arePropsEqual =
      isFunction(isEqual) && previousProps
        ? isEqual(previousProps, props)
        : false; // Default to false when no equality function is provided or no previous props

    // If props have changed, update the component reference
    if (!arePropsEqual) {
      ComponentRef.current = <Component {...props} ref={ref} />;
    }

    return ComponentRef.current;
    // Only depend on props and isEqual, not Component
  }, [props, isEqual, previousProps, ref]);

  return PureComponent;
};

export default useMemoComponent;
