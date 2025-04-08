import type { Meta, StoryObj } from '@storybook/react';
import Aside from '.';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';
import { ASIDE_POSITIONS, ASIDE_BACKGROUND_COLORS } from './constants';

const meta: Meta<typeof Aside> = {
  title: 'Molecules/Aside',
  component: Aside,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TYPOGRAPHY_VARIANTS),
    },
    position: {
      control: 'select',
      options: Object.values(ASIDE_POSITIONS),
    },
    backgroundColor: {
      control: 'select',
      options: Object.values(ASIDE_BACKGROUND_COLORS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Aside>;

export const Default: Story = {
  args: {
    content: 'This is a default aside component with some content.',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Important Note',
    content: 'This aside has a title to provide context for the content.',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const LeftPosition: Story = {
  args: {
    title: 'Left Aside',
    content: 'This aside is positioned on the left side.',
    position: 'left',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Info',
    content: 'This aside includes an icon for visual emphasis.',
    icon: 'ℹ️',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const PrimaryBackground: Story = {
  args: {
    title: 'Primary Aside',
    content: 'This aside uses the primary background color.',
    backgroundColor: 'primary',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const StickyAside: Story = {
  args: {
    title: 'Sticky Aside',
    content: 'This aside will stick to the top when scrolling.',
    isSticky: true,
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const AccentBackground: Story = {
  args: {
    title: 'Accent Aside',
    content: 'This aside uses the accent background color for emphasis.',
    backgroundColor: 'accent',
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};
