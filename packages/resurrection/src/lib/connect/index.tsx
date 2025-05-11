'use client';

import {
  ComponentType,
  forwardRef as reactForwardRef,
  memo,
  useRef,
  useMemo,
} from 'react';

import {
  ComponentPropsType,
  ConnectHookProps,
  ConnectOptions,
  MergePropsReturnType,
  InferStateFromContext,
} from './types';
import {
  useEffectAfterChange,
  useEffectOnce,
  useMemoComponent,
} from '../hooks';
import defaultMergeProps from '../utils/defaultMergeProps';
import createUseSelectorHook from '../hooks/createUseSelectorHook';
import createUseDispatchHook from '../hooks/createUseDispatchHook';
import bindActionCreator from '../utils/bindActionCreator';
import { shallowEquals, isFunction } from '../utils';

/**
 * connect HOC that maps state and dispatch to props with optimized memoization.
 * Prepares selector hooks outside render to avoid re-creating on each render.
 */
const connect = <
  MSTP extends ComponentPropsType = ComponentPropsType,
  MDTP extends ComponentPropsType = ComponentPropsType,
  OWNP extends ComponentPropsType = ComponentPropsType,
>(
  options: ConnectOptions<MSTP, MDTP, OWNP>,
) => {
  const {
    mapStateToPropsOptions = [],
    mapDispatchToPropsOptions = [],
    mergeProps = defaultMergeProps,
    pure = true,
    forwardRef = false,
    areOwnPropsEqual = shallowEquals,
    areMergedPropsEqual = shallowEquals,
    useHookDataFetchingOnce,
    useHookEffectAfterChange,
  } = options;

  // Prepare selector hooks and mappers once per connect invocation
  const selectorInfos = mapStateToPropsOptions.map((option) => ({
    useSelector: createUseSelectorHook(option.context),
    mapFn: option.mapStateToProps,
  }));

  // Prepare dispatch hooks once
  const dispatcherHooks = mapDispatchToPropsOptions.map((option) =>
    createUseDispatchHook(option.context),
  );

  return <P extends ComponentPropsType>(
    WrappedComponent: ComponentType<P>,
  ): ComponentType<Omit<P, keyof MSTP | keyof MDTP>> => {
    const wrappedName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedName})`;

    const ConnectFunction: React.FC<P & { forwardedRef?: React.Ref<any> }> = ({
      forwardedRef,
      ...props
    }) => {
      const ownPropsRef = useRef<OWNP>(props as OWNP);

      // Map state using prepared selectors
      const stateToProps = selectorInfos.reduce(
        (acc, { useSelector, mapFn }) => {
          const selected = useSelector<Partial<MSTP>, OWNP>(
            (state: InferStateFromContext<any>, p) => mapFn(state, p!),
            props as OWNP,
          );
          return { ...acc, ...selected } as MSTP;
        },
        {} as MSTP,
      );

      // Instantiate dispatch functions
      const dispatchers = dispatcherHooks.map((hook) => hook());

      // Bind action creators once using useMemo
      const dispatchToProps = useMemo<MDTP>(() => {
        return mapDispatchToPropsOptions.reduce((acc, item, index) => {
          const dispatch = dispatchers[index];

          const creator = isFunction(item.mapDispatchToProps)
            ? item.mapDispatchToProps(dispatch, ownPropsRef.current)
            : item.mapDispatchToProps;
          Object.entries(creator || {}).forEach(([key, action]) => {
            (acc as any)[key] = bindActionCreator(dispatch)(action as any);
          });
          return acc;
        }, {} as MDTP);
      }, []);

      // Merge props with useMemo
      const mergedProps = useMemo<MergePropsReturnType<MSTP, MDTP, OWNP>>(
        () => mergeProps(stateToProps, dispatchToProps, props as OWNP),
        [stateToProps, dispatchToProps, props],
      );

      const hookArgs: ConnectHookProps<MSTP, MDTP, OWNP> = {
        stateToProps,
        dispatchToProps,
        ownProps: props as OWNP,
        mergedProps,
      };

      useEffectOnce(() => useHookDataFetchingOnce?.(hookArgs));

      const effectParams = useHookEffectAfterChange?.(hookArgs) ?? [];
      useEffectAfterChange(...effectParams);

      return useMemoComponent<P>({
        Component: WrappedComponent,
        props: mergedProps as P,
        ref: forwardedRef,
        isEqual: pure ? areMergedPropsEqual : undefined,
      });
    };

    const Memoized = pure
      ? memo(ConnectFunction, areOwnPropsEqual)
      : ConnectFunction;
    Memoized.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const Forwarded = reactForwardRef<any, P>((props, ref) => (
        <Memoized {...(props as P)} forwardedRef={ref} />
      ));
      Forwarded.displayName = displayName;
      (Forwarded as any).WrappedComponent = WrappedComponent;
      return Forwarded as unknown as ComponentType<
        Omit<P, keyof MSTP | keyof MDTP>
      >;
    }

    return Memoized as ComponentType<Omit<P, keyof MSTP | keyof MDTP>>;
  };
};

export default connect;
