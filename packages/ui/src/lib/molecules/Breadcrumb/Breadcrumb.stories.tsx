import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from '.';

const meta = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Flowbite' },
    ],
  },
};

export const Solid: Story = {
  args: {
    data: [
      { label: 'Home', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'Flowbite' },
    ],
    variant: 'solid',
  },
};

export const CustomSeparator: Story = {
  args: {
    data: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Flowbite' },
    ],
    separator: <span className="mx-2 text-gray-400">/</span>,
  },
};

export const CustomIcons: Story = {
  args: {
    data: [
      {
        label: 'Home',
        href: '#',
        icon: (
          <svg
            className="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
        ),
      },
      {
        label: 'Projects',
        href: '#',
        icon: (
          <svg
            className="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
        ),
      },
      {
        label: 'Flowbite',
        icon: (
          <svg
            className="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
        ),
      },
    ],
  },
};
