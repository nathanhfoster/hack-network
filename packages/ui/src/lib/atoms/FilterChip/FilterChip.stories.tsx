import type { Meta, StoryObj } from '@storybook/react';
import FilterChip from './index';

const meta = {
  title: 'Atoms/FilterChip',
  component: FilterChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Filter',
    onRemove: () => console.log('Remove clicked'),
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom Filter',
    onRemove: () => console.log('Remove clicked'),
    className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  },
};
