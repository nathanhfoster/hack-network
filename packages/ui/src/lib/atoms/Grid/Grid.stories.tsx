import type { Meta, StoryObj } from '@storybook/react';
import Grid from './index';

const meta = {
  title: 'Atoms/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="bg-blue-100 p-4">Item 1</div>
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
      </>
    ),
  },
};

export const WithGap: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <div className="bg-blue-100 p-4">Item 1</div>
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    cols: 1,
    sm: 2,
    md: 3,
    lg: 4,
    children: (
      <>
        <div className="bg-blue-100 p-4">Item 1</div>
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
        <div className="bg-blue-100 p-4">Item 4</div>
      </>
    ),
  },
};

export const AutoFlow: Story = {
  args: {
    autoCols: true,
    autoFlow: 'row',
    children: (
      <>
        <div className="bg-blue-100 p-4">Item 1</div>
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
        <div className="bg-blue-100 p-4">Item 4</div>
      </>
    ),
  },
};
