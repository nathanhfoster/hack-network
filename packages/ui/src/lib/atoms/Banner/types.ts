import type { ReactNode } from 'react';

export type BannerPosition = 'top' | 'bottom';
export type BannerVariant =
  | 'default'
  | 'marketing'
  | 'newsletter'
  | 'informational';

export interface BannerProps {
  children: ReactNode;
  position?: BannerPosition;
  variant?: BannerVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  icon?: ReactNode;
  title?: string;
  cta?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
  form?: {
    label: string;
    placeholder: string;
    buttonLabel: string;
    onSubmit: (email: string) => void;
  };
}
