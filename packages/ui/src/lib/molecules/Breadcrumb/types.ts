import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';

export type BreadcrumbVariant = 'default' | 'solid';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface BreadcrumbProps extends DataComponent<BreadcrumbItem> {
  className?: string;
  variant?: BreadcrumbVariant;
  separator?: ReactNode;
}
