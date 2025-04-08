import type { ReactNode } from 'react';

export type ModalSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';
export type ModalColor =
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'gray';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  color?: ModalColor;
  dismissible?: boolean;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}
