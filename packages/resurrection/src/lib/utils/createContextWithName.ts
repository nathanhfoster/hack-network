'use client';

import { createContext } from 'use-context-selector';

import { DEFAULT_DISPATCH_CONTEXT } from '../constants';
import createUseDispatchHook from '../hooks/useDispatch';
import createUseSelectorHook from '../hooks/useSelector';

import { ActionCreatorType, ActionCreatorDispatch } from '../types';

const createContextWithName = <S, A extends ActionCreatorType>(
  displayName: string,
  initialState: S,
  initialDispatch = DEFAULT_DISPATCH_CONTEXT,
) => {
  const StateContext = createContext<S>(initialState);

  StateContext.displayName = `${displayName}StateContext`;
  const useSelector = createUseSelectorHook(StateContext);

  const DispatchContext = createContext<ActionCreatorDispatch<A>>(
    initialDispatch as unknown as ActionCreatorDispatch<A>,
  );

  DispatchContext.displayName = `${displayName}DispatchContext`;
  const useDispatch = createUseDispatchHook<A>(DispatchContext);

  return {
    StateContext,
    useSelector,
    DispatchContext,
    useDispatch,
  };
};

export default createContextWithName;
