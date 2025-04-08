import type { ReactNode } from 'react';

export type TabVariant = 'default' | 'underline' | 'pills';

export interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  isDisabled?: boolean;
  icon?: ReactNode;
  onClick: (id: string) => void;
  variant?: TabVariant;
  fullWidth?: boolean;
  className?: string;
}
