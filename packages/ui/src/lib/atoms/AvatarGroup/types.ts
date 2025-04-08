import type { ReactNode } from 'react';

export type AvatarGroupDirection = 'default' | 'rtl';

export interface AvatarGroupProps {
  children: ReactNode;
  stacked?: boolean;
  className?: string;
}
