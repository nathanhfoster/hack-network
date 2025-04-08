import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown from '.';
import type { DropdownProps } from './types';

const meta: Meta<DropdownProps> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DropdownProps>;

const defaultItems = [
  { href: '#', label: 'Dashboard' },
  { href: '#', label: 'Settings' },
  { href: '#', label: 'Earnings' },
  { href: '#', label: 'Sign out' },
];

const DropdownWithState = ({
  label,
  items,
  trigger,
}: Omit<DropdownProps, 'isOpen' | 'onToggle'>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      label={label}
      items={items}
      trigger={trigger}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
};

export const Default: Story = {
  render: () => <DropdownWithState label="Dropdown" items={defaultItems} />,
};

export const WithCustomTrigger: Story = {
  render: () => (
    <DropdownWithState
      label="Dropdown"
      items={defaultItems}
      trigger={
        <div className="flex items-center">
          <span>Custom Trigger</span>
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      }
    />
  ),
};
