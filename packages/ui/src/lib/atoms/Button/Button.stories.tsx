import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className:
      'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className:
      'bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded text-lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    className:
      'bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded text-sm',
  },
};
