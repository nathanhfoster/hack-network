import type { Meta, StoryObj } from '@storybook/react';
import Label from '.';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Field',
    className:
      'block text-sm font-medium text-gray-700 mb-1 after:content-["*"] after:ml-0.5 after:text-red-500',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Label',
    className: 'block text-lg font-semibold text-gray-900 mb-2',
  },
};
