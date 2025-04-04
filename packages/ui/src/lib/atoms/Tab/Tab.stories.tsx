import type { Meta, StoryObj } from '@storybook/react';
import Tab from '.';

const meta = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: false,
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const Active: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: true,
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const WithIcon: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: false,
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const Disabled: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: false,
    isDisabled: true,
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const UnderlineVariant: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: true,
    variant: 'underline',
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const PillsVariant: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: true,
    variant: 'pills',
    onClick: (id) => console.log('Tab clicked:', id),
  },
};

export const FullWidth: Story = {
  args: {
    id: 'tab-1',
    label: 'Tab 1',
    isActive: false,
    fullWidth: true,
    onClick: (id) => console.log('Tab clicked:', id),
  },
};
