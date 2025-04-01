'use client';

import { FC } from 'react';
import {
  createContextWithName,
  Provider,
  ReducerActionCreators,
} from 'resurrection';

import { getAdminInitialState, adminInitialState, adminSlice } from './reducer';
import { AdminContextProviderProps, AdminContextState } from './types';

export const adminContextActions = adminSlice.actions;

type AdminActions = ReducerActionCreators<typeof adminContextActions, 'Admin'>;

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
    <Provider<AdminContextState, AdminActions>
      {...restOfProps}
      StateContext={AdminStateContext}
      reducer={
        adminSlice.reducer as unknown as Reducer<
          AdminContextState,
          AdminActions
        >
      }
      initializer={getAdminInitialState}
      DispatchContext={AdminDispatchContext as any}
    >
      {children}
    </Provider>
  );
};

export const AdminSimpleContextProvider: FC<{
  initialState: AdminContextState;
  children: React.ReactNode;
}> = ({ initialState, children }) => {
  return (
    <AdminStateContext.Provider value={initialState}>
      {children}
    </AdminStateContext.Provider>
  );
};
