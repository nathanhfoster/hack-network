'use client';

import { FC } from 'react';
import {
  createContextWithName,
  Provider,
  ReducerActionCreators,
} from 'resurrection';

import { getAdminInitialState, adminInitialState, adminSlice } from './reducer';
import type { AdminContextProviderProps, AdminContextState } from './types';

export const adminContextActions = adminSlice.actions;

export type AdminActions = ReducerActionCreators<
  typeof adminContextActions,
  'Admin'
>;

export const AdminContext = createContextWithName<
  AdminContextState,
  AdminActions
>('Admin', adminInitialState);

export const {
  StateContext: AdminStateContext,
  useSelector: useAdminSelector,
  DispatchContext: AdminDispatchContext,
  useDispatch: useAdminDispatch,
} = AdminContext;

export const AdminContextProvider: FC<AdminContextProviderProps> = ({
  children,
  ...restOfProps
}) => {
  return (
    <Provider
      {...restOfProps}
      StateContext={AdminStateContext}
      reducer={adminSlice.reducer}
      initializer={getAdminInitialState}
      DispatchContext={AdminDispatchContext}
    >
      {children}
    </Provider>
  );
};
