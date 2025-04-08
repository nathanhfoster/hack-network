import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Enter email',
    type: 'email',
    className:
      'border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    className: 'border rounded px-3 py-2 bg-gray-100 cursor-not-allowed',
  },
};
