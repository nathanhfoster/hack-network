'use client';

import { useCallback, useEffect, useReducer, useRef } from 'react';

import { DEFAULT_DISPATCH_CONTEXT } from '../constants';
import setObjectStateReducer from '../reducers/setStateObjectReducer';
import defaultInitializer from '../utils/defaultInitializer';

export type SetStateAction<S> =
  | Partial<S>
  | ((prevState: S, callback?: typeof DEFAULT_DISPATCH_CONTEXT) => Partial<S>);

export type SetStateDispatch<S> = (
  state: S,
  callback?: typeof DEFAULT_DISPATCH_CONTEXT,
) => void;

/**
 * Mimics React.Component this.state and this.setState
 */
const useSetStateReducer = <S extends {}>(
  initializerArg: S = {} as S,
  initializer = defaultInitializer,
) => {
  // Temporarily holds the reference to a callback
  const callbackRef = useRef(DEFAULT_DISPATCH_CONTEXT);
  const [state, dispatch] = useReducer(
    setObjectStateReducer<S>,
    initializerArg,
    initializer,
  );

  // Augments the dispatch to accept a callback as a second parameter
  const setState = useCallback(
    (updater: S, callback: typeof DEFAULT_DISPATCH_CONTEXT) => {
      callbackRef.current = callback ?? DEFAULT_DISPATCH_CONTEXT;
      dispatch(updater);
    },
    [],
  );

  // Call the callback after every state change
  useEffect(() => {
    callbackRef.current(state);
    callbackRef.current = DEFAULT_DISPATCH_CONTEXT;
  }, [state]);

  return [state, setState] as [S, SetStateDispatch<S>];
};

export default useSetStateReducer;
