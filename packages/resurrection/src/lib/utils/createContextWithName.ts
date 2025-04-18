'use client';

import { Dispatch } from 'react';
import { createContext } from 'use-context-selector';

import createUseDispatchHook from '../hooks/useDispatch';
import createUseSelectorHook from '../hooks/useSelector';
import { ReducerActionCreators } from './createSlice/types';
import {
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
} from '../types';

const createContextWithName = <
  S extends object,
  A extends ReducerActionCreators<any, string>,
>(
  displayName: string,
  initialState: S,
) => {
  const StateContext = createContext<S>(initialState);

  StateContext.displayName = `${displayName}StateContext`;
  const useSelector = createUseSelectorHook(StateContext);

  const DispatchContext = createContext<
    Dispatch<
      | Thunk<A, S>
      | ActionCreatorWithPayload<any, string>
      | PayloadActionCreator<any, string>
    >
  >(() => {
    throw new Error('Dispatch function not initialized');
  });

  DispatchContext.displayName = `${displayName}DispatchContext`;
  const useDispatch = createUseDispatchHook(DispatchContext);

  return {
    StateContext,
    useSelector,
    DispatchContext,
    useDispatch,
  };
};

export default createContextWithName;
