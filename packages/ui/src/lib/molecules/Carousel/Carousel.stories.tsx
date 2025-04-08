import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '.';

const meta: Meta<typeof Carousel> = {
  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const data = [
  {
    id: '1',
    content: (
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        className="absolute block w-full h-full object-cover"
        alt="Slide 1"
      />
    ),
  },
  {
    id: '2',
    content: (
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        className="absolute block w-full h-full object-cover"
        alt="Slide 2"
      />
    ),
  },
  {
    id: '3',
    content: (
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        className="absolute block w-full h-full object-cover"
        alt="Slide 3"
      />
    ),
  },
];

export const Default: Story = {
  args: {
    data,
  },
};

export const WithoutControls: Story = {
  args: {
    data,
    showControls: false,
  },
};

export const WithoutIndicators: Story = {
  args: {
    data,
    showIndicators: false,
  },
};

export const CustomInterval: Story = {
  args: {
    data,
    interval: 5000,
  },
};

export const WithCustomContent: Story = {
  args: {
    data: [
      {
        id: '1',
        content: (
          <div className="absolute block w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl">
            Slide 1
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div className="absolute block w-full h-full bg-green-500 flex items-center justify-center text-white text-4xl">
            Slide 2
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div className="absolute block w-full h-full bg-purple-500 flex items-center justify-center text-white text-4xl">
            Slide 3
          </div>
        ),
      },
    ],
  },
};
