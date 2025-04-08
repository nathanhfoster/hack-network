import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
}
