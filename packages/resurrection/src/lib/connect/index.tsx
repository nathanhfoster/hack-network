/* eslint-disable react-hooks/rules-of-hooks */
/**
 * A higher-order component (HOC) that connects a React component to one or more context stores.
 * This HOC allows the component to consume state and dispatch actions from context stores,
 * and passes the mapped values as props to the wrapped component.
 *
 * @template MSTP - The type of the mapped state props.
 * @template MDTP - The type of the mapped dispatch props.
 * @template OWNP - The type of the component's own props.
 * @template State - The type of the state in the context stores.
 * @template Payload - The type of the payload in the actions.
 * @template ActionType - The type of the action in the actions.
 *
 * @param {ConnectOptions<MSTP, MDTP, OWNP, State, Payload, ActionType>} options - Configuration options for the `connect` HOC.
 * @param {Array} options.mapStateToPropsOptions - An array of objects specifying how to map state from context stores to props.
 * Each object should include a `context` and a `mapStateToProps` function.
 * @param {Array} options.mapDispatchToPropsOptions - An array of objects specifying how to map dispatch actions from context stores to props.
 * Each object should include a `context` and a `mapDispatchToProps` function or object.
 * @param {boolean} [options.pure=true] - Whether the component should implement `React.memo` for performance optimization.
 * @param {boolean} [options.forwardRef=false] - Whether to forward refs to the wrapped component.
 * @param {Function} [options.areOwnPropsEqual=shallowEquals] - A function to compare own props for equality.
 * @param {Function} [options.areMergedPropsEqual=shallowEquals] - A function to compare merged props for equality.
 * @param {Function} [options.useHookDataFetchingOnce] - A hook function to perform data fetching logic once when the component mounts.
 * @param {Function} [options.useHookEffectAfterChange] - A hook function to perform side effects after props or state change.
 *
 * @returns {Function} A function that wraps a React component and connects it to the specified context stores.
 *
 * @example
 * ```tsx
 *
 * const ConnectedComponent = connect({
 *   mapStateToPropsOptions: [{ context: CounterContext, mapStateToProps: (state) => ({ count: state.count }) }],
 *   mapDispatchToPropsOptions: [{ context: CounterContext, mapDispatchToProps: { someAction: SomeSlice.actions.someAction } }],
 * })(MyComponent);
 * ```
 */
'use client';

import { isFunction, shallowEquals } from '../utils';
import React, {
  ComponentType,
  FC,
  forwardRef as reactForwardRef,
  memo,
  useRef,
  RefObject,
  useMemo,
} from 'react';

import {
  ComponentPropsType,
  ConnectHookProps,
  ConnectOptions,
  ConnectOptionUseEffectAfterChangeReturn,
  MergePropsReturnType,
  InferStateFromContext,
} from './types';
import {
  useEffectAfterChange,
  useEffectOnce,
  useMemoComponent,
} from '../hooks';
import defaultMergeProps from '../utils/defaultMergeProps';
import createUseSelectorHook from '../hooks/useSelector';
import createUseDispatchHook from '../hooks/useDispatch';
import bindActionCreator from '../utils/bindActionCreator';
import type { LoosePartial } from '../types';

const connect = <
  MSTP extends ComponentPropsType = ComponentPropsType,
  MDTP extends ComponentPropsType = ComponentPropsType,
  OWNP extends ComponentPropsType = ComponentPropsType,
>({
  mapStateToPropsOptions = [],
  mapDispatchToPropsOptions = [],
  pure = true,
  forwardRef = false,
  mergeProps = defaultMergeProps,
  areOwnPropsEqual = shallowEquals,
  areMergedPropsEqual = shallowEquals,
  useHookDataFetchingOnce,
  useHookEffectAfterChange,
}: ConnectOptions<MSTP, MDTP, OWNP>) => {
  const wrapWithConnect = <P extends ComponentPropsType>(
    WrappedComponent: ComponentType<P>,
  ): ComponentType<Omit<P, keyof MSTP | keyof MDTP>> => {
    const wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';

    const displayName = `Connect(${wrappedComponentName})`;

    const ConnectFunction: FC<
      P & { forwardedRef?: React.Ref<HTMLElement> }
    > = ({ forwardedRef, ...restOfProps }) => {
      const ownPropsRef = useRef(restOfProps);

      const mapStateToPropsContexts = mapStateToPropsOptions.map((item) => {
        const useSelector = createUseSelectorHook(item.context);

        const contextState = useSelector<LoosePartial<MSTP>, OWNP>(
          (state: InferStateFromContext<typeof item.context>, props?: OWNP) =>
            item.mapStateToProps(state, props ?? ({} as OWNP)),
          restOfProps as OWNP,
        );

        return contextState;
      });

      const stateToProps = useMemo<MSTP>(() => {
        return mapStateToPropsOptions.reduce((acc, _item, index) => {
          const contextState = mapStateToPropsContexts[index];
          return { ...acc, ...contextState } as MSTP;
        }, {} as MSTP);
      }, [restOfProps]);

      const mapDispatchToPropsContexts = mapDispatchToPropsOptions.map(
        (item) => {
          const useDispatch = createUseDispatchHook(item.context);
          const dispatch = useDispatch();

          return dispatch;
        },
      );

      const dispatchToProps = useMemo<MDTP>(() => {
        return mapDispatchToPropsOptions.reduce((acc: MDTP, item, index) => {
          const dispatch = mapDispatchToPropsContexts[index];

          Object.entries(
            isFunction(item.mapDispatchToProps)
              ? item.mapDispatchToProps(dispatch, ownPropsRef.current as OWNP)
              : item.mapDispatchToProps,
          ).forEach(([actionName, action]) => {
            acc[actionName as keyof MDTP] = bindActionCreator(dispatch)(
              action as any,
            ) as MDTP[keyof MDTP];
          });

          return acc;
        }, {} as MDTP);
      }, []);

      const mergedProps: MergePropsReturnType<MSTP, MDTP, OWNP> = useMemo(
        () =>
          mergeProps(
            stateToProps,
            dispatchToProps,
            restOfProps as unknown as OWNP,
          ),
        [dispatchToProps, restOfProps, stateToProps],
      );

      const hookProps: ConnectHookProps<MSTP, MDTP, OWNP> = {
        stateToProps,
        dispatchToProps,
        ownProps: restOfProps as unknown as OWNP,
        mergedProps,
      };

      useEffectOnce(() => {
        useHookDataFetchingOnce?.(hookProps);
      });

      const useEffectAfterChangeParams: ConnectOptionUseEffectAfterChangeReturn =
        useHookEffectAfterChange?.(hookProps) ?? [];

      useEffectAfterChange(...useEffectAfterChangeParams);

      const ConnectedComponent = useMemoComponent<P>({
        Component: WrappedComponent,
        props: mergedProps as P,
        ref: (forwardedRef ? forwardedRef : undefined) as
          | RefObject<P>
          | undefined,
        isEqual: pure ? areMergedPropsEqual : undefined,
      });

      return ConnectedComponent;
    };

    const Connect = pure
      ? memo(ConnectFunction, areOwnPropsEqual)
      : ConnectFunction;

    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const ForwaredComponent = reactForwardRef<any, P>((props, ref) => {
        return <Connect {...(props as P)} forwardedRef={ref} />;
      });

      ForwaredComponent.displayName = displayName;
      (ForwaredComponent as any).WrappedComponent = WrappedComponent;

      return ForwaredComponent as unknown as ComponentType<
        Omit<P, keyof MSTP | keyof MDTP>
      >;
    }

    return Connect as any;
  };

  return wrapWithConnect;
};

export default connect;
