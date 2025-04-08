import type { Meta, StoryObj } from '@storybook/react';
import Article from '.';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

const meta: Meta<typeof Article> = {
  title: 'Molecules/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TYPOGRAPHY_VARIANTS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {
    title: 'Article Title',
    content:
      'This is the main content of the article. It can contain multiple paragraphs and rich text content.',
    variant: TYPOGRAPHY_VARIANTS.body1,
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Article Title',
    subtitle:
      'A descriptive subtitle that provides more context about the article',
    content:
      'This is the main content of the article. It can contain multiple paragraphs and rich text content.',
    variant: TYPOGRAPHY_VARIANTS.body1,
  },
};

export const WithMetadata: Story = {
  args: {
    title: 'Article Title',
    subtitle: 'A descriptive subtitle',
    author: 'John Doe',
    date: 'April 2, 2024',
    content:
      'This is the main content of the article. It can contain multiple paragraphs and rich text content.',
    variant: TYPOGRAPHY_VARIANTS.body1,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Article Title',
    subtitle: 'A descriptive subtitle',
    author: 'John Doe',
    date: 'April 2, 2024',
    imageUrl: 'https://picsum.photos/800/400',
    imageAlt: 'Article featured image',
    content:
      'This is the main content of the article. It can contain multiple paragraphs and rich text content.',
    variant: TYPOGRAPHY_VARIANTS.body1,
  },
};

export const WithTags: Story = {
  args: {
    title: 'Article Title',
    subtitle: 'A descriptive subtitle',
    author: 'John Doe',
    date: 'April 2, 2024',
    imageUrl: 'https://picsum.photos/800/400',
    imageAlt: 'Article featured image',
    content:
      'This is the main content of the article. It can contain multiple paragraphs and rich text content.',
    variant: TYPOGRAPHY_VARIANTS.body1,
    tags: ['Technology', 'Web Development', 'React'],
  },
};
