import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    children: 'Loading...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="blue" />
      <Spinner color="green" />
      <Spinner color="red" />
      <Spinner color="yellow" />
      <Spinner color="purple" />
      <Spinner color="gray" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      disabled
    >
      <Spinner size="sm" className="mr-2" />
      Loading...
    </button>
  ),
};
