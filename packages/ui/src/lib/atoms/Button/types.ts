import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'alternative'
  | 'dark'
  | 'light'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'outline'
  | 'gradient'
  | 'gradientDuotone'
  | 'gradientOutline';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  pill?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  gradientHoverFrom?: string;
  gradientHoverTo?: string;
  gradientText?: string;
  gradientDuotoneFrom?: string;
  gradientDuotoneTo?: string;
  gradientDuotoneHoverFrom?: string;
  gradientDuotoneHoverTo?: string;
  gradientOutlineFrom?: string;
  gradientOutlineTo?: string;
  gradientOutlineHoverFrom?: string;
  gradientOutlineHoverTo?: string;
  gradientOutlineText?: string;
}
