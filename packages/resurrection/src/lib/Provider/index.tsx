'use client';

import { isFunction } from '@hack-network/utils';
import React, { Dispatch, SetStateAction } from 'react';

import useReducerWithThunk from '../hooks/useReducerWithThunk';
import setStateReducer from '../reducers/setStateReducer';
import defaultInitializer from '../utils/defaultInitializer';

import type { ProviderProps, ContextStoreInitializer } from './types';

const Provider = <TState, TAction>({
  StateContext,
  reducer = setStateReducer as React.Reducer<TState, TAction>,
  derivedStateFromProps,
  initialState,
  initializer = defaultInitializer as ContextStoreInitializer<TState>,
  DispatchContext,
  children,
}: ProviderProps<TState, TAction>): React.ReactElement => {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    (initialState ?? derivedStateFromProps ?? {}) as TState,
    initializer,
    derivedStateFromProps as TState
  );

  const StateContextProvider = (
    <StateContext.Provider value={state}>
      {isFunction(children) ? (
        <StateContext.Consumer>{children}</StateContext.Consumer>
      ) : (
        children
      )}
    </StateContext.Provider>
  );

  if (!DispatchContext) {
    return StateContextProvider;
  }

  return (
    <DispatchContext.Provider
      value={dispatch as Dispatch<SetStateAction<TAction>>}
    >
      {StateContextProvider}
    </DispatchContext.Provider>
  );
};

export default Provider;
