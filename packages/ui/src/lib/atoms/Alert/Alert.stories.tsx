import type { Meta, StoryObj } from '@storybook/react';
import Alert from '.';
import { ALERT_COLORS, ALERT_VARIANTS } from './constants';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(ALERT_COLORS),
    },
    variant: {
      control: 'select',
      options: Object.values(ALERT_VARIANTS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'A simple alert with some text.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Alert Title',
    children: 'An alert with a title and some text.',
  },
};

export const Primary: Story = {
  args: {
    color: ALERT_COLORS.primary,
    children: 'A primary alert with some text.',
  },
};

export const Success: Story = {
  args: {
    color: ALERT_COLORS.success,
    children: 'A success alert with some text.',
  },
};

export const Danger: Story = {
  args: {
    color: ALERT_COLORS.danger,
    children: 'A danger alert with some text.',
  },
};

export const Warning: Story = {
  args: {
    color: ALERT_COLORS.warning,
    children: 'A warning alert with some text.',
  },
};

export const Info: Story = {
  args: {
    color: ALERT_COLORS.info,
    children: 'An info alert with some text.',
  },
};

export const Dark: Story = {
  args: {
    color: ALERT_COLORS.dark,
    children: 'A dark alert with some text.',
  },
};

export const Bordered: Story = {
  args: {
    variant: ALERT_VARIANTS.bordered,
    children: 'A bordered alert with some text.',
  },
};

export const Dismissible: Story = {
  args: {
    dismissible: true,
    onDismiss: () => alert('Alert dismissed!'),
    children: 'A dismissible alert with some text.',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: (
      <svg
        className="shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
    ),
    children: 'An alert with a custom icon.',
  },
};
