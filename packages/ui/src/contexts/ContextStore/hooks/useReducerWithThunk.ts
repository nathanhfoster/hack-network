'use client';

import { isFunction } from '@hack-network/utils';
import { Dispatch, Reducer, ReducerState, useCallback, useRef } from 'react';

import useEffectAfterMount from '../../../hooks/useEffectAfterMount';
import useRouterParams from '../../../hooks/useRouterParams/index';
import NextRouterAugmented from '../../../hooks/useRouterParams/types';
import { ThunkAction } from '../types';
import defaultInitializer from '../utils/defaultInitializer';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import getReducerDefaultState from '../utils/getReducerDefaultState';

import useLazyMemo from './useLazyMemo';
import usePropsThatChanged from './usePropsThatChanged';
import useSetStateReducer from './useSetStateReducer';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R> = getReducerDefaultState(reducer as any),
  initializer = defaultInitializer,
  derivedStateFromProps?: ReducerState<R>
): [ReducerState<R>, Dispatch<R extends Reducer<any, infer A> ? A : never>] => {
  const router = useRouterParams();

  // Only keep the props that changed to override the state
  const derivedStateFromPropsThatChanged = usePropsThatChanged<R>(
    derivedStateFromProps
  );

  // Get initial hook state once
  const initialHookState: R = useLazyMemo(
    useCallback(
      () =>
        getDerivedStateFromProps(
          initialState,
          derivedStateFromPropsThatChanged
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    )
  );

  const [hookState, setHookState] = useSetStateReducer(
    initialHookState,
    initializer
  );

  // State management
  const state = useRef<ReducerState<R>>(hookState as ReducerState<R>);

  const getState = useCallback<() => ReducerState<R>>(
    () => state.current,
    [state]
  );

  const getRouter = useCallback<() => NextRouterAugmented>(
    () => router,
    [router]
  );

  const setState = useCallback(
    (newState: ReducerState<R>, callback?: (_state?: unknown) => void) => {
      const derivedState = getDerivedStateFromProps<ReducerState<R>>(
        newState,
        derivedStateFromPropsThatChanged
      );

      state.current = derivedState;

      setHookState(derivedState, callback);
    },
    [derivedStateFromPropsThatChanged, setHookState]
  );

  // make the state controlled from an HOC by passing derivedStateFromPropsThatChanged
  useEffectAfterMount(() => {
    if (Object.keys(derivedStateFromPropsThatChanged).length > 0) {
      setState(state.current);
    }
  }, [derivedStateFromProps, setState]);

  // Reducer
  const reduce = useCallback(
    (action: R extends Reducer<any, infer A> ? A : never) =>
      reducer(getState(), action),
    [reducer, getState]
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (
      action: ThunkAction<R, R extends Reducer<any, infer A> ? A : never>,
      callback?: (_state?: unknown) => void
    ) => {
      if (isFunction(action)) {
        return action(dispatch, getState, getRouter);
      }
      const newState: ReducerState<R> = reduce(action);

      return setState(newState, callback);
    },
    [reduce, getState, setState, getRouter]
  );

  return [
    hookState as ReducerState<R>,
    dispatch as Dispatch<R extends Reducer<any, infer A> ? A : never>,
  ];
};

export default useReducerWithThunk;
