'use client';

import { isFunction } from '../utils';
import { useCallback, useRef, Dispatch, SetStateAction } from 'react';
import usePropsThatChanged from './usePropsThatChanged';
import useLazyMemo from './useLazyMemo';
import getDerivedStateFromProps from '../utils/getDerivedStateFromProps';
import useSetStateReducer from './useSetStateReducer';
import useEffectAfterMount from './useEffectAfterMount';

import type { ContextStoreInitializer } from '../types';

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
export default function useReducerWithThunk<
  S extends object,
  A extends object = S,
>(
  reducer: (state: S, action: any) => S,
  initialState: S,
  initializer?: ContextStoreInitializer<S, A>,
  derivedStateFromProps?: S,
): [S, Dispatch<SetStateAction<A>>] {
  // Only keep the props that changed to override the state
  const derivedStateFromPropsThatChanged = usePropsThatChanged<S>(
    derivedStateFromProps ?? ({} as S),
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

  const [hookState, setHookState] = useSetStateReducer(
    initialHookState,
    initializer,
  );

  // State management
  const state = useRef<S>(hookState as S);

  const getState = useCallback<() => S>(() => state.current, [state]);

  const setState = useCallback(
    (newState: S, callback?: (_state?: unknown) => void) => {
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
    (action: any) => reducer(getState(), action),
    [reducer, getState],
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (action: any, callback?: (_state?: unknown) => void) => {
      if (isFunction(action)) {
        return action(dispatch, getState);
      }
      const newState: S = reduce(action);

      return setState(newState, callback);
    },
    [reduce, getState, setState],
  );

  return [hookState as S, dispatch as Dispatch<SetStateAction<A>>];
}
