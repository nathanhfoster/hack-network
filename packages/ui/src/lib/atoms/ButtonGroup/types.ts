import type { ReactNode } from 'react';
import type { ButtonProps } from '../Button/types';

export interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  outline?: boolean;
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
}

export interface ButtonGroupItemProps extends Omit<ButtonProps, 'className'> {
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
  isActive?: boolean;
  outline?: boolean;
}
