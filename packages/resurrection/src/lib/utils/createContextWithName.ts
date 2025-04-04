'use client';

import { Dispatch } from 'react';
import { createContext } from 'use-context-selector';

import { DEFAULT_DISPATCH_CONTEXT } from '../constants';
import createUseDispatchHook from '../hooks/useDispatch';
import createUseSelectorHook from '../hooks/useSelector';
import { SetStateAction } from '../hooks/useSetStateReducer';

const createContextWithName = <S, D = typeof DEFAULT_DISPATCH_CONTEXT>(
  displayName: string,
  initialState: S,
  initialDispatch = DEFAULT_DISPATCH_CONTEXT,
) => {
  const StateContext = createContext<S>(initialState);

  StateContext.displayName = `${displayName}StateContext`;
  const useSelector = createUseSelectorHook(StateContext);

  const DispatchContext = createContext<Dispatch<SetStateAction<D>>>(
    initialDispatch as unknown as Dispatch<SetStateAction<D>>,
  );

  DispatchContext.displayName = `${displayName}DispatchContext`;
  const useDispatch = createUseDispatchHook<D>(DispatchContext);

  return {
    StateContext,
    useSelector,
    DispatchContext,
    useDispatch,
  };
};

export default createContextWithName;
