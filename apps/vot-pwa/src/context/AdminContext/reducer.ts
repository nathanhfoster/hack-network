import { createReducer, Draft, ContextStoreInitializer } from 'resurrection';

import { AdminContextState, AdminSettings, AdminUser } from './types';
import { AdminActions } from './index';

export const getAdminInitialState: ContextStoreInitializer<
  AdminActions,
  AdminContextState
> = (initialState) => {
  return {
    ...adminInitialState,
    ...initialState,
  };
};

export const adminInitialState: AdminContextState = {
  users: [],
  settings: {
    theme: 'light',
    language: 'en',
    notifications: true,
    sidebarCollapsed: false,
  },
};

const SetUsers = (state: Draft<AdminContextState>, users: AdminUser[]) => {
  state.users = users;
};

const UpdateUser = (state: Draft<AdminContextState>, user: AdminUser) => {
  const index = state.users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    state.users[index] = user;
  }
};

const UpdateSettings = (
  state: Draft<AdminContextState>,
  settings: Partial<AdminSettings>,
) => {
  state.settings = {
    ...state.settings,
    ...settings,
  };
};

export const adminSlice = createReducer({
  name: 'Admin',
  initialState: adminInitialState,
  actions: {
    SetUsers,
    UpdateUser,
    UpdateSettings,
  },
});
