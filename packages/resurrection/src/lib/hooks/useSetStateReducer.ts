'use client';

import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  ActionDispatch,
} from 'react';

import setObjectStateReducer from '../reducers/setStateObjectReducer';
import defaultInitializer from '../utils/defaultInitializer';
import type { SetStateUpdater } from '../reducers/setStateReducer';

export type StateCallback<S> = (prevState: S) => void;

export type SetState<S> = (
  updater: S | SetStateUpdater<S>,
  callback?: StateCallback<S>,
) => void;

/**
 * Mimics React.Component this.state and this.setState
 */
const useSetStateReducer = <S extends {}>(
  initializerArg: S = {} as S,
  initializer = defaultInitializer,
): [S, ActionDispatch<[S | SetState<S>]>] => {
  const callbackRef = useRef<StateCallback<S> | undefined>(undefined);
  const [state, dispatch] = useReducer<S, S, [S | StateCallback<S>]>(
    setObjectStateReducer<S>,
    initializerArg,
    initializer,
  );

  // Augments the dispatch to accept a callback as a second parameter
  const setState = useCallback<SetState<S>>((prevState, callback) => {
    callbackRef.current = callback;
    dispatch(prevState);
  }, []);

  // Call the callback after every state change
  useEffect(() => {
    callbackRef.current?.(state);
    callbackRef.current = undefined;
  }, [state]);

  return [state, setState];
};

export default useSetStateReducer;
