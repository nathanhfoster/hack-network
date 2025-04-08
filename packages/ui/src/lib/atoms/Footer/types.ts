import type { ReactNode } from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  children?: ReactNode;
  className?: string;
  copyright?: {
    text: string;
    href?: string;
  };
  links?: FooterLink[];
  socialLinks?: FooterSocialLink[];
  logo?: {
    src: string;
    alt: string;
    text?: string;
  };
  sticky?: boolean;
}
