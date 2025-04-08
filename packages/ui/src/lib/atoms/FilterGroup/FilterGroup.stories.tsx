import type { Meta, StoryObj } from '@storybook/react';
import FilterGroup from '.';
import FilterChip from '../FilterChip';

const meta = {
  title: 'Atoms/FilterGroup',
  component: FilterGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    label: 'Categories',
    options: defaultOptions,
    selectedValues: [],
    onChange: (values) => console.log('Selected:', values),
    children: (
      <>
        <FilterChip
          label="Category 1"
          onRemove={() => console.log('Remove 1')}
        />
        <FilterChip
          label="Category 2"
          onRemove={() => console.log('Remove 2')}
        />
        <FilterChip
          label="Category 3"
          onRemove={() => console.log('Remove 3')}
        />
      </>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Categories',
    options: defaultOptions,
    selectedValues: [],
    onChange: (values) => console.log('Selected:', values),
    className: 'bg-gray-100 p-4 rounded-lg',
    children: (
      <>
        <FilterChip
          label="Category 1"
          onRemove={() => console.log('Remove 1')}
        />
        <FilterChip
          label="Category 2"
          onRemove={() => console.log('Remove 2')}
        />
        <FilterChip
          label="Category 3"
          onRemove={() => console.log('Remove 3')}
        />
      </>
    ),
  },
};
