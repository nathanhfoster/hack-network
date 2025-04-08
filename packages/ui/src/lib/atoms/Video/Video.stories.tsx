import type { Meta, StoryObj } from '@storybook/react';
import Video from '.';

const meta: Meta<typeof Video> = {
  title: 'Atoms/Video',
  component: Video,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Video>;

const defaultSources = [
  {
    src: 'https://flowbite.com/docs/videos/flowbite.mp4',
    type: 'video/mp4',
  },
];

export const Default: Story = {
  args: {
    sources: defaultSources,
  },
};

export const Autoplay: Story = {
  args: {
    sources: defaultSources,
    autoplay: true,
  },
};

export const Muted: Story = {
  args: {
    sources: defaultSources,
    autoplay: true,
    muted: true,
  },
};

export const CustomSize: Story = {
  args: {
    sources: defaultSources,
    width: '384', // w-96
    height: '216', // 16:9 aspect ratio
  },
};

export const Responsive: Story = {
  args: {
    sources: defaultSources,
    className: 'w-full h-auto max-w-full',
  },
};

export const CustomStyles: Story = {
  args: {
    sources: defaultSources,
    className:
      'w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700',
  },
};

export const WithoutControls: Story = {
  args: {
    sources: defaultSources,
    controls: false,
  },
};

export const Loop: Story = {
  args: {
    sources: defaultSources,
    loop: true,
  },
};

export const CustomFallback: Story = {
  args: {
    sources: defaultSources,
    fallback: (
      <div className="p-4 text-center bg-gray-100 rounded-lg dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">
          Your browser does not support the video tag. Please download the video
          to watch it.
        </p>
      </div>
    ),
  },
};
