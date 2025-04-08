import type { ReactNode } from 'react';

export interface NavbarLink {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface NavbarDropdown {
  label: string;
  items: {
    href: string;
    label: string;
  }[];
}

export interface NavbarUserMenu {
  avatar?: {
    src: string;
    alt: string;
  };
  name?: string;
  dropdownItems: {
    href: string;
    label: string;
  }[];
}

export interface NavbarProps {
  brand?: {
    logo?: {
      src: string;
      alt: string;
    };
    name?: string;
  };
  links?: NavbarLink[];
  dropdowns?: NavbarDropdown[];
  userMenu?: NavbarUserMenu;
  cta?: {
    label: string;
    href: string;
  };
  search?: {
    placeholder?: string;
    onChange?: (value: string) => void;
  };
  className?: string;
  children?: ReactNode;
}
