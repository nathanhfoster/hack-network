import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';

export type AccordionVariant = 'default' | 'flush' | 'bordered';
export type AccordionColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark';

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen?: boolean;
  icon?: ReactNode;
  className?: string;
}

export interface AccordionProps extends DataComponent<AccordionItemProps> {
  variant?: AccordionVariant;
  color?: AccordionColor;
  alwaysOpen?: boolean;
  className?: string;
  onToggle?: (index: number) => void;
}
