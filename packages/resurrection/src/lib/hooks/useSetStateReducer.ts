'use client';

import {
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useTransition,
} from 'react';

import setObjectStateReducer from '../reducers/setStateObjectReducer';
import defaultInitializer from '../utils/defaultInitializer';

export type StateCallback<S> = (prevState: S) => void;

export type SetState<S> = (
  updater: Partial<S> | SetStateAction<S>,
  callback?: StateCallback<S>,
) => void;

/**
 * Mimics React.Component this.state and this.setState
 * @returns [state, setState, isPending] - state object, setState function, and pending status
 */
const useSetStateReducer = <S extends Record<string, any>>(
  initializerArg: S = {} as S,
  initializer = defaultInitializer,
): [S, SetState<S>, boolean] => {
  const callbackRef = useRef<StateCallback<S> | undefined>(undefined);

  const [state, dispatch] = useReducer(
    setObjectStateReducer<S>,
    initializerArg,
    initializer,
  );

  const [isPending, startTransition] = useTransition();

  // Augments the dispatch to accept a callback as a second parameter
  const setState = useCallback<SetState<S>>((updater, callback) => {
    callbackRef.current = callback;
    startTransition(() => {
      dispatch(updater);
    });
  }, []);

  // Call the callback after every state change
  useEffect(() => {
    callbackRef.current?.(state);
    callbackRef.current = undefined;
  }, [state]);

  return [state, setState, isPending];
};

export default useSetStateReducer;
