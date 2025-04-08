import type { ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipStyle = 'light' | 'dark';
export type TooltipTriggerType = 'hover' | 'click';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  style?: TooltipStyle;
  triggerType?: TooltipTriggerType;
  className?: string;
  contentClassName?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}
