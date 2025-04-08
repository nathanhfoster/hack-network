import type { Meta, StoryObj } from '@storybook/react';
import Progress from '.';
import {
  PROGRESS_COLORS,
  PROGRESS_LABEL_POSITIONS,
  PROGRESS_SIZES,
} from './constants';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(PROGRESS_SIZES),
    },
    color: {
      control: 'select',
      options: Object.values(PROGRESS_COLORS),
    },
    labelPosition: {
      control: 'select',
      options: Object.values(PROGRESS_LABEL_POSITIONS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 45,
  },
};

export const WithLabel: Story = {
  args: {
    value: 45,
    label: 'Flowbite',
    labelPosition: PROGRESS_LABEL_POSITIONS.outside,
  },
};

export const WithLabelInside: Story = {
  args: {
    value: 45,
    labelPosition: PROGRESS_LABEL_POSITIONS.inside,
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: PROGRESS_SIZES.sm,
  },
};

export const Large: Story = {
  args: {
    value: 45,
    size: PROGRESS_SIZES.lg,
  },
};

export const ExtraLarge: Story = {
  args: {
    value: 45,
    size: PROGRESS_SIZES.xl,
  },
};

export const Success: Story = {
  args: {
    value: 45,
    color: PROGRESS_COLORS.success,
  },
};

export const Danger: Story = {
  args: {
    value: 45,
    color: PROGRESS_COLORS.danger,
  },
};

export const Warning: Story = {
  args: {
    value: 45,
    color: PROGRESS_COLORS.warning,
  },
};

export const Info: Story = {
  args: {
    value: 45,
    color: PROGRESS_COLORS.info,
  },
};

export const Dark: Story = {
  args: {
    value: 45,
    color: PROGRESS_COLORS.dark,
  },
};

export const CustomMax: Story = {
  args: {
    value: 45,
    max: 200,
  },
};

export const WithoutValue: Story = {
  args: {
    value: 45,
    showValue: false,
  },
};
