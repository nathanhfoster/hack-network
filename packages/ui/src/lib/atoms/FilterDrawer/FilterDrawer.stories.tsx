import type { Meta, StoryObj } from '@storybook/react';
import FilterDrawer from './index';
import { useState } from 'react';

const meta = {
  title: 'Atoms/FilterDrawer',
  component: FilterDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const FilterDrawerDemo = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <FilterDrawer isOpen={isOpen} onClose={onClose} title="Filters">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">Filter Options</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full p-2 border rounded">
              <option>All</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-1/2 p-2 border rounded"
                placeholder="Min"
              />
              <input
                type="number"
                className="w-1/2 p-2 border rounded"
                placeholder="Max"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-2 border rounded hover:bg-gray-100"
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FilterDrawer>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Filters',
    children: null,
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <FilterDrawerDemo isOpen={isOpen} onClose={() => setIsOpen(false)} />
    );
  },
};

export const WithCustomClass: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Custom Filters',
    children: null,
    className: 'bg-gray-50',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <FilterDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Custom Filters"
        className="bg-gray-50"
      >
        <div className="p-4">
          <p>Custom styled filter drawer content</p>
        </div>
      </FilterDrawer>
    );
  },
};
