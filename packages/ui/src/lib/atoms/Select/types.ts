import type { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
