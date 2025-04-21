'use client';

import {
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useRef,
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
 */
const useSetStateReducer = <S extends Record<string, any>>(
  initializerArg: S = {} as S,
  initializer = defaultInitializer,
): [S, SetState<S>] => {
  const callbackRef = useRef<StateCallback<S> | undefined>(undefined);

  const [state, dispatch] = useReducer(
    setObjectStateReducer<S>,
    initializerArg,
    initializer,
  );

  // Augments the dispatch to accept a callback as a second parameter
  const setState = useCallback<SetState<S>>((updater, callback) => {
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
