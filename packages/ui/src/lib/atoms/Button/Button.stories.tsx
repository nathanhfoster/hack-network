import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Alternative: Story = {
  args: {
    variant: 'alternative',
    children: 'Alternative',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Green',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Red',
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    children: 'Yellow',
  },
};

export const Purple: Story = {
  args: {
    variant: 'purple',
    children: 'Purple',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Gradient',
  },
};

export const GradientDuotone: Story = {
  args: {
    variant: 'gradientDuotone',
    children: 'Gradient Duotone',
  },
};

export const GradientOutline: Story = {
  args: {
    variant: 'gradientOutline',
    children: 'Gradient Outline',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'With Icons',
    leftIcon: '←',
    rightIcon: '→',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Pill: Story = {
  args: {
    children: 'Pill',
    pill: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width',
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2XL</Button>
    </div>
  ),
};
