import type { ReactNode } from 'react';

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTriggerType = 'hover' | 'click' | 'none';

export interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
  placement?: PopoverPlacement;
  triggerType?: PopoverTriggerType;
  offset?: number;
  className?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}
