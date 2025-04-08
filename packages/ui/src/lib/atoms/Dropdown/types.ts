import type { ReactNode } from 'react';

export interface DropdownItem {
  href: string;
  label: string;
}

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}
