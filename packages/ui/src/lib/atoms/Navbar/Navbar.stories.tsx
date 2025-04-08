import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './index';
import type { NavbarProps } from './types';

const meta: Meta<NavbarProps> = {
  title: 'Atoms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavbarProps>;

const defaultBrand = {
  logo: {
    src: 'https://flowbite.com/docs/images/logo.svg',
    alt: 'Flowbite Logo',
  },
  name: 'Flowbite',
};

const defaultLinks = [
  { href: '#', label: 'Home', isActive: true },
  { href: '#', label: 'About' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'Contact' },
];

const defaultDropdowns = [
  {
    label: 'Dropdown',
    items: [
      { href: '#', label: 'Dashboard' },
      { href: '#', label: 'Settings' },
      { href: '#', label: 'Earnings' },
      { href: '#', label: 'Sign out' },
    ],
  },
];

const defaultUserMenu = {
  avatar: {
    src: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
    alt: 'user photo',
  },
  name: 'Neil Sims',
  dropdownItems: [
    { href: '#', label: 'Settings' },
    { href: '#', label: 'Earnings' },
    { href: '#', label: 'Sign out' },
  ],
};

const defaultSearch = {
  placeholder: 'Search...',
  onChange: (value: string) => console.log('Search:', value),
};

const defaultCta = {
  label: 'Get started',
  href: '#',
};

export const Default: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
  },
};

export const WithDropdown: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
    dropdowns: defaultDropdowns,
  },
};

export const WithSearch: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
    search: defaultSearch,
  },
};

export const WithUserMenu: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
    userMenu: defaultUserMenu,
  },
};

export const WithCta: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
    cta: defaultCta,
  },
};

export const Complete: Story = {
  args: {
    brand: defaultBrand,
    links: defaultLinks,
    dropdowns: defaultDropdowns,
    search: defaultSearch,
    userMenu: defaultUserMenu,
    cta: defaultCta,
  },
};
