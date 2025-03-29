import type { ReactNode } from 'react'

export interface TabProps {
  id: string
  label: string
  isActive: boolean
  isDisabled?: boolean
  icon?: ReactNode
  onClick: (id: string) => void
  variant?: 'default' | 'underline' | 'pills'
  fullWidth?: boolean
  className?: string
}
