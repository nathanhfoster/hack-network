import type { ReactNode } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'rounded' | 'rounded-full' | 'rounded-sm';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  statusPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  bordered?: boolean;
  stacked?: boolean;
  className?: string;
  children?: ReactNode;
}
