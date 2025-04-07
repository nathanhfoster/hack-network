import { createSlice, Draft, ContextStoreInitializer } from 'resurrection';

import {
  AdminContextState,
  AdminServerProps,
  AdminSettings,
  AdminUser,
} from './types';

export const adminInitialState: AdminContextState = {
  users: [],
  settings: {
    theme: 'light',
    language: 'en',
    notifications: true,
    sidebarCollapsed: false,
  },
};

export const getAdminInitialState: ContextStoreInitializer<
  AdminContextState,
  AdminServerProps
> = (initialState) => {
  if (!initialState) {
    return adminInitialState;
  }

  return {
    ...adminInitialState,
    ...initialState,
  };
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

export const adminSlice = createSlice({
  name: 'Admin',
  initialState: adminInitialState,
  actions: {
    SetUsers,
    UpdateUser,
    UpdateSettings,
  },
});
