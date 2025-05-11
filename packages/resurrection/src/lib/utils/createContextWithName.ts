'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'use-context-selector';
import createUseDispatchHook from '../hooks/createUseDispatchHook';
import createUseSelectorHook from '../hooks/createUseSelectorHook';
import type { ReducerActionCreators } from './createSlice/types';
import type {
  Thunk,
  ActionCreatorWithPayload,
  PayloadActionCreator,
  PayloadAction,
} from '../types';
import type { ComponentPropsType } from '../connect/types';

const createContextWithName = <
  S extends ComponentPropsType,
  A extends ReducerActionCreators<any, string>,
>(
  displayName: string,
  initialState: S
) => {
  const StateContext = createContext<S>(initialState);

  StateContext.displayName = `${displayName}StateContext`;
  const useSelector = createUseSelectorHook(StateContext);

  const DispatchContext = createContext<
    Dispatch<
      | PayloadAction<string, any>
      | ActionCreatorWithPayload<any, string>
      | PayloadActionCreator<any, string>
      | Thunk<A, S>
      | SetStateAction<S>
      | Partial<S>
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
