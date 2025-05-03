'use client';

import { isFunction } from '../utils';
import { useCallback, useRef, Dispatch, SetStateAction } from 'react';
import usePropsThatChanged from './usePropsThatChanged';
import useLazyMemo from './useLazyMemo';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import useSetStateReducer, { StateCallback } from './useSetStateReducer';
import useEffectAfterMount from './useEffectAfterMount';

import type {
  ContextStoreInitializer,
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
  PayloadAction,
} from '../types';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <
  S extends Record<string, any>,
  I extends Record<string, any> = S,
  A extends object = ActionCreatorWithPayload<any, string>,
>(
  reducer: (
    state: S,
    action: A | Partial<S> | SetStateAction<S> | PayloadAction<string, any>,
  ) => S,
  initialState: I extends S ? S : I,
  initializer?: ContextStoreInitializer<S, I>,
  derivedStateFromProps?: Partial<S>,
): [
  S,
  Dispatch<
    | PayloadAction<string, any>
    | Thunk<A, S>
    | ActionCreatorWithPayload<any, string>
    | PayloadActionCreator<any, string>
    | A
    | SetStateAction<S>
    | Partial<S>
  >,
  boolean,
] => {
  // Only keep the props that changed to override the state
  const derivedStateFromPropsThatChanged = usePropsThatChanged<S>(
    derivedStateFromProps,
  );

  // Get initial hook state once
  const initialHookState: S = useLazyMemo(
    useCallback(
      () =>
        getDerivedStateFromProps(
          initialState as S,
          derivedStateFromPropsThatChanged as Partial<S>,
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    ),
  );

  const [hookState, setHookState, isHookStatePending] = useSetStateReducer<S>(
    initialHookState,
    initializer,
  );

  // State management
  const state = useRef<S>(hookState as S);

  const getState = useCallback<() => S>(() => state.current, [state]);

  const setState = useCallback(
    (prevState: S, callback?: StateCallback<S>) => {
      const derivedState = getDerivedStateFromProps<S>(
        prevState,
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
    (action: A | Partial<S> | SetStateAction<S> | PayloadAction<string, any>) =>
      reducer(getState(), action),
    [reducer, getState],
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (
      action:
        | PayloadAction<string, any>
        | Thunk<A, S>
        | ActionCreatorWithPayload<any, string>
        | PayloadActionCreator<any, string>
        | A
        | SetStateAction<S>
        | Partial<S>,
      callback?: StateCallback<S>,
    ) => {
      if (isFunction(action)) {
        return action(dispatch, getState);
      }
      const newState = reduce(action);

      return setState(newState, callback);
    },
    [reduce, getState, setState],
  );

  return [hookState, dispatch, isHookStatePending];
};

export default useReducerWithThunk;
