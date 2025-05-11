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

      // Always call hooks in the same order
      const mapStateToPropsContexts = useMemo(
        () =>
          mapStateToPropsOptions.map((item) => {
            const useSelector = createUseSelectorHook(item.context);
            return useSelector<LoosePartial<MSTP>, OWNP>(
              (
                state: InferStateFromContext<typeof item.context>,
                props?: OWNP,
              ) => item.mapStateToProps(state, props ?? ({} as OWNP)),
              restOfProps as OWNP,
            );
          }),
        [restOfProps, mapStateToPropsOptions],
      );

      const stateToProps = useMemo<MSTP>(() => {
        return mapStateToPropsOptions.reduce((acc, _item, index) => {
          const contextState = mapStateToPropsContexts[index];
          return { ...acc, ...contextState } as MSTP;
        }, {} as MSTP);
      }, [restOfProps, mapStateToPropsContexts]);

      const mapDispatchToPropsContexts = useMemo(
        () =>
          mapDispatchToPropsOptions.map((item) => {
            const useDispatch = createUseDispatchHook(item.context);
            return useDispatch();
          }),
        [restOfProps, mapDispatchToPropsOptions],
      );

      const dispatchToProps = useMemo<MDTP>(() => {
        return mapDispatchToPropsOptions.reduce((acc: MDTP, item, index) => {
          const dispatch = mapDispatchToPropsContexts[index];

          Object.entries(
            isFunction(item.mapDispatchToProps)
              ? item.mapDispatchToProps(dispatch, ownPropsRef.current as OWNP)
              : item.mapDispatchToProps,
          ).forEach(([actionName, action]) => {
            acc[actionName as keyof MDTP] = bindActionCreator(dispatch)(action);
          });

          return acc;
        }, {} as MDTP);
      }, [mapDispatchToPropsContexts]);

      const mergedProps = useMemo<MergePropsReturnType<MSTP, MDTP, OWNP>>(
        () =>
          mergeProps(
            stateToProps,
            dispatchToProps,
            restOfProps as unknown as OWNP,
          ),
        [stateToProps, restOfProps, dispatchToProps],
      );

      const hookProps = useMemo<ConnectHookProps<MSTP, MDTP, OWNP>>(
        () => ({
          stateToProps,
          dispatchToProps,
          ownProps: restOfProps as unknown as OWNP,
          mergedProps,
        }),
        [stateToProps, mergedProps, restOfProps, dispatchToProps],
      );

      useEffectOnce(() => {
        useHookDataFetchingOnce?.(hookProps);
      });

      const useEffectAfterChangeParams: ConnectOptionUseEffectAfterChangeReturn<any> =
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
