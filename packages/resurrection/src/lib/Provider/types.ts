import { Dispatch, ReactNode } from 'react';
import { Context } from 'use-context-selector';
import { ContextStoreInitializer, PayloadAction } from '../types';

export type ProviderProps<S extends object, A extends object = S> = {
  StateContext: Context<S>;
  reducer?: (
    state:
      | (S & {
          [x: string]: any;
        })
      | undefined,
    action: PayloadAction,
  ) => S;
  initialState?: S;
  initializer?: ContextStoreInitializer<S, A>;
  derivedStateFromProps?: S;
  DispatchContext?: Context<Dispatch<A>>;
  children: ReactNode | ((...args: any[]) => any);
};
