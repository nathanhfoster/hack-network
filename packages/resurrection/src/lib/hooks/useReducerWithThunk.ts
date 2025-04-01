'use client';

import { isFunction } from '../utils';
import { Dispatch, Reducer, ReducerState, useCallback, useRef } from 'react';
import getReducerDefaultState from '../utils/getReducerDefaultState';
import defaultInitializer from '../utils/defaultInitializer';
import usePropsThatChanged from './usePropsThatChanged';
import useLazyMemo from './useLazyMemo';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import useSetStateReducer from './useSetStateReducer';
import useEffectAfterMount from './useEffectAfterMount';
import { ThunkAction } from '../types';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R> = getReducerDefaultState(reducer as any),
  initializer = defaultInitializer,
  derivedStateFromProps?: ReducerState<R>,
): [ReducerState<R>, Dispatch<R extends Reducer<any, infer A> ? A : never>] => {
  // Only keep the props that changed to override the state
  const derivedStateFromPropsThatChanged = usePropsThatChanged<ReducerState<R>>(
    derivedStateFromProps ?? ({} as ReducerState<R>),
  );

  // Get initial hook state once
  const initialHookState: R = useLazyMemo(
    useCallback(
      () =>
        getDerivedStateFromProps(
          initialState,
          derivedStateFromPropsThatChanged,
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    ),
  );

  const [hookState, setHookState] = useSetStateReducer(
    initialHookState,
    initializer,
  );

  // State management
  const state = useRef<ReducerState<R>>(hookState as ReducerState<R>);

  const getState = useCallback<() => ReducerState<R>>(
    () => state.current,
    [state],
  );

  const setState = useCallback(
    (newState: ReducerState<R>, callback?: (_state?: unknown) => void) => {
      const derivedState = getDerivedStateFromProps<ReducerState<R>>(
        newState,
        derivedStateFromPropsThatChanged,
      );

      state.current = derivedState;

      setHookState(derivedState, callback);
    },
    [derivedStateFromPropsThatChanged, setHookState],
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
    [reducer, getState],
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (
      action: ThunkAction<R, R extends Reducer<any, infer A> ? A : never>,
      callback?: (_state?: unknown) => void,
    ) => {
      if (isFunction(action)) {
        return action(dispatch, getState);
      }
      const newState: ReducerState<R> = reduce(action);

      return setState(newState, callback);
    },
    [reduce, getState, setState],
  );

  return [
    hookState as ReducerState<R>,
    dispatch as Dispatch<R extends Reducer<any, infer A> ? A : never>,
  ];
};

export default useReducerWithThunk;
