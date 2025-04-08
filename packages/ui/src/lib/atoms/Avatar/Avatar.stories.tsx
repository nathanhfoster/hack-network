import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';
import { AVATAR_SHAPES, AVATAR_SIZES } from './constants';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(AVATAR_SIZES),
    },
    shape: {
      control: 'select',
      options: Object.keys(AVATAR_SHAPES),
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
    statusPosition: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const defaultImage =
  'https://flowbite.com/docs/images/people/profile-picture-5.jpg';

export const Default: Story = {
  args: {
    src: defaultImage,
    alt: 'User avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src={defaultImage} alt="Extra small avatar" />
      <Avatar size="sm" src={defaultImage} alt="Small avatar" />
      <Avatar size="md" src={defaultImage} alt="Medium avatar" />
      <Avatar size="lg" src={defaultImage} alt="Large avatar" />
      <Avatar size="xl" src={defaultImage} alt="Extra large avatar" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="rounded" src={defaultImage} alt="Rounded avatar" />
      <Avatar
        shape="rounded-full"
        src={defaultImage}
        alt="Rounded full avatar"
      />
      <Avatar
        shape="rounded-sm"
        src={defaultImage}
        alt="Rounded small avatar"
      />
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={defaultImage} status="online" alt="Online user" />
      <Avatar src={defaultImage} status="offline" alt="Offline user" />
      <Avatar src={defaultImage} status="away" alt="Away user" />
      <Avatar src={defaultImage} status="busy" alt="Busy user" />
    </div>
  ),
};

export const StatusPositions: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src={defaultImage}
        status="online"
        statusPosition="top-left"
        alt="Top left status"
      />
      <Avatar
        src={defaultImage}
        status="online"
        statusPosition="top-right"
        alt="Top right status"
      />
      <Avatar
        src={defaultImage}
        status="online"
        statusPosition="bottom-left"
        alt="Bottom left status"
      />
      <Avatar
        src={defaultImage}
        status="online"
        statusPosition="bottom-right"
        alt="Bottom right status"
      />
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={defaultImage} bordered alt="Bordered avatar" />
      <Avatar src={defaultImage} bordered alt="Bordered avatar" />
    </div>
  ),
};

export const DefaultAvatar: Story = {
  args: {
    alt: 'Default avatar',
  },
};

export const WithInitials: Story = {
  args: {
    children: (
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
    ),
  },
};
