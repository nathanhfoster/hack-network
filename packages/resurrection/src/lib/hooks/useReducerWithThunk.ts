'use client';

import { isFunction } from '../utils';
import { useCallback, useRef, Dispatch } from 'react';
import usePropsThatChanged from './usePropsThatChanged';
import useLazyMemo from './useLazyMemo';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import useSetStateReducer from './useSetStateReducer';
import useEffectAfterMount from './useEffectAfterMount';

import type {
  ContextStoreInitializer,
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
} from '../types';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <
  S extends object,
  I extends object = S,
  A extends object = ActionCreatorWithPayload<any, string>,
>(
  reducer: (state: S, action: A) => S,
  initialState: I extends S ? S : I,
  initializer?: ContextStoreInitializer<S, I>,
  derivedStateFromProps?: Partial<S>,
): [
  S,
  Dispatch<
    | Thunk<A, S>
    | ActionCreatorWithPayload<any, string>
    | PayloadActionCreator<any, string>
  >,
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
          initialState,
          derivedStateFromPropsThatChanged,
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    ),
  );

  const [hookState, setHookState] = useSetStateReducer<S>(
    initialHookState,
    initializer,
  );

  // State management
  const state = useRef<S>(hookState as S);

  const getState = useCallback<() => S>(() => state.current, [state]);

  const setState = useCallback(
    (newState: S, callback?: (state?: S) => void) => {
      const derivedState = getDerivedStateFromProps<S>(
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
    (action: A) => reducer(getState(), action),
    [reducer, getState],
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (
      action:
        | Thunk<A, S>
        | ActionCreatorWithPayload<any, string>
        | PayloadActionCreator<any, string>
        | A,
      callback?: (state?: S) => void,
    ) => {
      if (isFunction(action)) {
        return action(dispatch, getState);
      }
      const newState: S = reduce(action);

      return setState(newState, callback);
    },
    [reduce, getState, setState],
  );

  return [hookState, dispatch];
};

export default useReducerWithThunk;
