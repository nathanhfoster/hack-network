import { ReactNode } from 'react';
import { Context } from 'use-context-selector';
import {
  ActionCreatorType,
  ActionCreatorDispatch,
  ContextStoreInitializerWithActions,
} from '../types';

export type ProviderProps<S = any, A extends ActionCreatorType = any> = {
  StateContext: Context<S>;
  reducer?: (
    state: S,
    action: ReturnType<A[keyof A]> | { type: string; payload: any },
  ) => S;
  initialState?: S;
  initializer?: ContextStoreInitializerWithActions<A, S>;
  derivedStateFromProps?: S;
  DispatchContext?: Context<ActionCreatorDispatch<A>>;
  children: ReactNode | ((...args: any[]) => any);
};
