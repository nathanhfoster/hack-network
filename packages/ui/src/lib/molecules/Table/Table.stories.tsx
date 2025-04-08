import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';
import type { TableProps } from './types';
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

type StoryTableProps = TableProps<Product>;

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table<Product>>;

const columns: StoryTableProps['columns'] = [
  {
    key: 'name',
    header: 'Product name',
  },
  {
    key: 'category',
    header: 'Category',
  },
  {
    key: 'price',
    header: 'Price',
    render: (item) => `$${item.price.toFixed(2)}`,
  },
  {
    key: 'stock',
    header: 'Stock',
    render: (item) => (
      <span className={item.stock < 10 ? 'text-red-500' : ''}>
        {item.stock}
      </span>
    ),
  },
];

const data: StoryTableProps['data'] = [
  {
    id: '1',
    name: 'Apple MacBook Pro 17"',
    category: 'Laptop',
    price: 2999,
    stock: 15,
  },
  {
    id: '2',
    name: 'Microsoft Surface Pro',
    category: 'Laptop PC',
    price: 1999,
    stock: 8,
  },
  {
    id: '3',
    name: 'Magic Mouse 2',
    category: 'Accessories',
    price: 99,
    stock: 5,
  },
];

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Striped: Story = {
  args: {
    data,
    columns,
    striped: true,
  },
};

export const Hoverable: Story = {
  args: {
    data,
    columns,
    hoverable: true,
  },
};

export const Bordered: Story = {
  args: {
    data,
    columns,
    bordered: true,
  },
};

export const WithCustomStyling: Story = {
  args: {
    data,
    columns,
    striped: true,
    hoverable: true,
    bordered: true,
    className: 'max-w-3xl mx-auto',
  },
};
