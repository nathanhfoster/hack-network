import type { ReactNode } from 'react';

export type SpeedDialPosition = 'top' | 'right' | 'bottom' | 'left';
export type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';
export type SpeedDialTriggerType = 'hover' | 'click';

export interface SpeedDialAction {
  icon: ReactNode;
  tooltip?: string;
  onClick?: () => void;
}

export interface SpeedDialProps {
  actions: SpeedDialAction[];
  position?: SpeedDialPosition;
  direction?: SpeedDialDirection;
  triggerType?: SpeedDialTriggerType;
  className?: string;
  triggerIcon?: ReactNode;
  triggerLabel?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: (isOpen: boolean) => void;
}
