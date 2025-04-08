export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl';

export type ProgressColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark';

export type ProgressLabelPosition = 'inside' | 'outside' | 'none';

export interface ProgressProps {
  value: number;
  max?: number;
  size?: ProgressSize;
  color?: ProgressColor;
  labelPosition?: ProgressLabelPosition;
  label?: string;
  showValue?: boolean;
  className?: string;
}
