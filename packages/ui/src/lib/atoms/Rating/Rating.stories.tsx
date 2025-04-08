import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Rating from '.';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

const RatingDemo = ({ args }: { args: any }) => {
  const [value, setValue] = useState(3);
  return <Rating value={value} onChange={setValue} {...args} />;
};

export const Default: Story = {
  render: (args) => <RatingDemo args={args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <RatingDemo
      args={{
        ...args,
        label: '4.0 out of 5',
      }}
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <RatingDemo args={{ size: 'sm' }} />
      <RatingDemo args={{ size: 'md' }} />
      <RatingDemo args={{ size: 'lg' }} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <RatingDemo args={{ color: 'yellow' }} />
      <RatingDemo args={{ color: 'green' }} />
      <RatingDemo args={{ color: 'red' }} />
      <RatingDemo args={{ color: 'blue' }} />
      <RatingDemo args={{ color: 'purple' }} />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RatingDemo
      args={{
        ...args,
        disabled: true,
      }}
    />
  ),
};

export const Readonly: Story = {
  render: (args) => (
    <RatingDemo
      args={{
        ...args,
        readonly: true,
      }}
    />
  ),
};

export const WithHover: Story = {
  render: (args) => (
    <RatingDemo
      args={{
        ...args,
        onHover: (value: number) => console.log('Hovering over:', value),
        onLeave: () => console.log('Left rating area'),
      }}
    />
  ),
};
