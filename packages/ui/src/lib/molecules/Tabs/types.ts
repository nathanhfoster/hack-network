import type { ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
  className?: string
  variant?: 'default' | 'underline' | 'pills'
  fullWidth?: boolean
}
