import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './index';
import { useState } from 'react';

const meta = {
  title: 'Atoms/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationDemo = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <PaginationDemo totalPages={10} />,
};

export const ManyPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 20,
    onPageChange: () => {},
  },
  render: () => <PaginationDemo totalPages={20} />,
};

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    onPageChange: () => {},
  },
  render: () => <PaginationDemo totalPages={3} />,
};

export const WithCustomClass: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
    className: 'bg-gray-100 p-4 rounded-lg',
  },
  render: () => (
    <Pagination
      currentPage={1}
      totalPages={10}
      onPageChange={() => {}}
      className="bg-gray-100 p-4 rounded-lg"
    />
  ),
};
