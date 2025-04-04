import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';

export interface TableColumn<T extends object> {
  key: keyof T & (string | number);
  header: string;
  render?: (item: T) => ReactNode;
}

export interface TableProps<T extends object> extends DataComponent<T> {
  columns: TableColumn<T>[];
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  className?: string;
  onRowClick?: (item: T) => void;
}
