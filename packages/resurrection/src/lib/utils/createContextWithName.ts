'use client';

import { Dispatch } from 'react';
import { createContext } from 'use-context-selector';

import { DEFAULT_DISPATCH_CONTEXT } from '../constants';
import createUseDispatchHook from '../hooks/useDispatch';
import createUseSelectorHook from '../hooks/useSelector';

const createContextWithName = <S extends object, A extends object = S>(
  displayName: string,
  initialState: S,
  initialDispatch = DEFAULT_DISPATCH_CONTEXT,
) => {
  const StateContext = createContext<S>(initialState);

  StateContext.displayName = `${displayName}StateContext`;
  const useSelector = createUseSelectorHook(StateContext);

  const DispatchContext = createContext<Dispatch<A>>(
    initialDispatch as unknown as Dispatch<A>,
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
