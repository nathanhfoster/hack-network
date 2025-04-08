import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    children: 'Loading...',
  },
};

export const Text: Story = {
  render: () => (
    <div className="max-w-sm space-y-4">
      <Skeleton variant="text" width="48" />
      <Skeleton variant="text" width="360" />
      <Skeleton variant="text" width="330" />
      <Skeleton variant="text" width="300" />
      <Skeleton variant="text" width="360" />
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="circular" width={80} height={80} />
    </div>
  ),
};

export const Rectangular: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton variant="rectangular" width={200} height={100} />
      <Skeleton variant="rectangular" width={300} height={150} />
      <Skeleton variant="rectangular" width={400} height={200} />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton animation="pulse" width={200} height={100} />
      <Skeleton animation="wave" width={200} height={100} />
      <Skeleton animation="none" width={200} height={100} />
    </div>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <div className="max-w-sm p-4 space-y-4 border border-gray-200 rounded-lg shadow animate-pulse dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="24" />
          <Skeleton variant="text" width="32" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={200} />
      <div className="space-y-2">
        <Skeleton variant="text" width="48" />
        <Skeleton variant="text" width="360" />
      </div>
    </div>
  ),
};
