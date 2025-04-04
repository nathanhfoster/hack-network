import { Dispatch, ReactNode } from 'react';
import { Context } from 'use-context-selector';
import { ContextStoreInitializer, Thunk } from '../types';

export type ProviderProps<S extends object, I extends object = S, A = any> = {
  StateContext?: Context<S>;
  reducer?: (state: S, action: A) => S;
  initialState?: S;
  initializer?: ContextStoreInitializer<S, I>;
  derivedStateFromProps?: Partial<S>;
  DispatchContext?: Context<Dispatch<Thunk<A, S>>>;
  children: ReactNode | ((state: S) => ReactNode);
};
