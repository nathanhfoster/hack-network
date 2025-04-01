import type { ContextProviderProps, ContextStore } from '../ContextStore/types'

export interface AdminUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: AdminRole
  permissions: string[]
  lastLogin?: string
  createdAt: string
  updatedAt: string
}

export enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER'
}

export interface AdminSettings {
  theme: 'light' | 'dark'
  language: string
  notifications: boolean
  sidebarCollapsed: boolean
}

export type AdminContextProviderProps = ContextProviderProps<{
  users: AdminUser[]
  settings: AdminSettings
}>

export type AdminContextState = ContextStore<{
  users: AdminUser[]
  settings: AdminSettings
}> 