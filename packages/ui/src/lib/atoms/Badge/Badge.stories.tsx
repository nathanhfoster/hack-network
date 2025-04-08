import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';
import { BADGE_COLORS, BADGE_SIZES, BADGE_VARIANTS } from './constants';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(BADGE_COLORS),
    },
    size: {
      control: 'select',
      options: Object.keys(BADGE_SIZES),
    },
    variant: {
      control: 'select',
      options: Object.keys(BADGE_VARIANTS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="default">Default</Badge>
      <Badge color="dark">Dark</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">Extra small</Badge>
      <Badge size="sm">Small</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="bordered">Bordered</Badge>
      <Badge variant="pill">Pill</Badge>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge dismissible onDismiss={() => alert('Badge dismissed!')}>
        Default
      </Badge>
      <Badge
        color="dark"
        dismissible
        onDismiss={() => alert('Badge dismissed!')}
      >
        Dark
      </Badge>
      <Badge
        color="red"
        dismissible
        onDismiss={() => alert('Badge dismissed!')}
      >
        Red
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge
        icon={
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        }
      >
        With icon
      </Badge>
      <Badge
        color="dark"
        icon={
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        }
      >
        With icon
      </Badge>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge
        icon={
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        }
        iconOnly
      />
      <Badge
        color="dark"
        icon={
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
        }
        iconOnly
      />
    </div>
  ),
};
