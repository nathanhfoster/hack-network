import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card Content',
  },
};

export const WithBorder: Story = {
  args: {
    children: 'Card with Border',
    className: 'bg-white rounded-lg border border-gray-200 p-6',
  },
};

export const Elevated: Story = {
  args: {
    children: 'Elevated Card',
    className: 'bg-white rounded-lg shadow-lg p-6',
  },
};

export const Colored: Story = {
  args: {
    children: 'Colored Card',
    className: 'bg-blue-50 rounded-lg shadow-md p-6 border border-blue-100',
  },
};
