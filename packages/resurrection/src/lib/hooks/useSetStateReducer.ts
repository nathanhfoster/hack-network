'use client';

import { useCallback, useEffect, useReducer, useRef } from 'react';

import setObjectStateReducer from '../reducers/setStateObjectReducer';
import defaultInitializer from '../utils/defaultInitializer';

export type StateCallback<S> = (state: S) => void;
export type SetState<S> = (updater: S, callback?: StateCallback<S>) => void;

/**
 * Mimics React.Component this.state and this.setState
 */
const useSetStateReducer = <S extends {}>(
  initializerArg: S = {} as S,
  initializer = defaultInitializer,
): [S, SetState<S>] => {
  // Temporarily holds the reference to a callback
  const callbackRef = useRef<StateCallback<S> | undefined>(undefined);
  const [state, dispatch] = useReducer(
    setObjectStateReducer<S>,
    initializerArg,
    initializer,
  );

  // Augments the dispatch to accept a callback as a second parameter
  const setState = useCallback((updater: S, callback?: StateCallback<S>) => {
    callbackRef.current = callback;
    dispatch(updater);
  }, []);

  // Call the callback after every state change
  useEffect(() => {
    callbackRef.current?.(state);
    callbackRef.current = undefined;
  }, [state]);

  return [state, setState];
};

export default useSetStateReducer;
