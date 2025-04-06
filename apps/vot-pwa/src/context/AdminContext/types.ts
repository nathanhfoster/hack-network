import type { ProviderProps, ContextStore, Ensure } from 'resurrection';

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: AdminRole;
  permissions: string[];
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

export interface AdminSettings {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  sidebarCollapsed: boolean;
}

export type AdminState = {
  users: AdminUser[];
  settings: AdminSettings;
};

export type AdminServerProps = Pick<AdminState, 'users'>;

export type AdminContextProviderProps = Ensure<
  ProviderProps<AdminState, AdminServerProps>,
  'initialState'
>;

export type AdminContextState = ContextStore<AdminState>;
