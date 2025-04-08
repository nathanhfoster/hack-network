import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from '.';
import Avatar from '../Avatar';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Atoms/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const defaultImage =
  'https://flowbite.com/docs/images/people/profile-picture-5.jpg';

export const Default: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar src={defaultImage} alt="User 1" />
      <Avatar src={defaultImage} alt="User 2" />
      <Avatar src={defaultImage} alt="User 3" />
    </AvatarGroup>
  ),
};

export const Stacked: Story = {
  render: () => (
    <AvatarGroup stacked>
      <Avatar src={defaultImage} alt="User 1" />
      <Avatar src={defaultImage} alt="User 2" />
      <Avatar src={defaultImage} alt="User 3" />
      <Avatar src={defaultImage} alt="User 4" />
    </AvatarGroup>
  ),
};
