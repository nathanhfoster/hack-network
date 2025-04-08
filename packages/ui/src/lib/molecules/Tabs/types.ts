import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends DataComponent<TabItem> {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'underline' | 'pills';
  fullWidth?: boolean;
}
