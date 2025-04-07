import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';

const meta: Meta<typeof Gallery> = {
  title: 'Atoms/Gallery',
  component: Gallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Gallery>;

const defaultImages = [
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    alt: 'Gallery image 1',
    width: 500,
    height: 500,
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    alt: 'Gallery image 2',
    width: 500,
    height: 500,
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    alt: 'Gallery image 3',
    width: 500,
    height: 500,
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    alt: 'Gallery image 4',
    width: 500,
    height: 500,
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    alt: 'Gallery image 5',
    width: 500,
    height: 500,
  },
  {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    alt: 'Gallery image 6',
    width: 500,
    height: 500,
  },
];

export const Default: Story = {
  args: {
    images: defaultImages,
  },
};

export const WithNextImage: Story = {
  args: {
    images: defaultImages,
  },
};

export const TwoColumns: Story = {
  args: {
    images: defaultImages,
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    images: defaultImages,
    columns: 4,
  },
};

export const WithTags: Story = {
  args: {
    images: defaultImages,
    tags: [
      { label: 'All categories', isActive: true },
      { label: 'Shoes' },
      { label: 'Bags' },
      { label: 'Electronics' },
      { label: 'Gaming' },
    ],
    onTagClick: (tag) => console.log('Tag clicked:', tag),
  },
};
