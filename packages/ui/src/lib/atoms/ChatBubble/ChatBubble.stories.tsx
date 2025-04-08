import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from '.';

const meta: Meta<typeof ChatBubble> = {
  title: 'Atoms/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const Default: Story = {
  render: () => (
    <ChatBubble
      avatar={{
        src: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
        alt: 'Jese image',
      }}
      sender="Bonnie Green"
      timestamp="11:46"
      status="Delivered"
    >
      That's awesome. I think our users will really appreciate the improvements.
    </ChatBubble>
  ),
};

export const Outline: Story = {
  render: () => (
    <ChatBubble
      variant="outline"
      avatar={{
        src: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
        alt: 'Jese image',
      }}
      sender="Bonnie Green"
      timestamp="11:46"
      status="Delivered"
    >
      That's awesome. I think our users will really appreciate the improvements.
    </ChatBubble>
  ),
};

export const Clean: Story = {
  render: () => (
    <ChatBubble
      variant="clean"
      avatar={{
        src: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
        alt: 'Jese image',
      }}
      sender="Bonnie Green"
      timestamp="11:46"
      status="Delivered"
    >
      That's awesome. I think our users will really appreciate the improvements.
    </ChatBubble>
  ),
};

export const Sender: Story = {
  render: () => (
    <ChatBubble
      isSender
      avatar={{
        src: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
        alt: 'Jese image',
      }}
      sender="Bonnie Green"
      timestamp="11:46"
      status="Delivered"
    >
      That's awesome. I think our users will really appreciate the improvements.
    </ChatBubble>
  ),
};
