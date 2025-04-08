import type { Meta, StoryObj } from '@storybook/react';
import Timeline from '.';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';
import { TIMELINE_CONNECTOR_COLORS } from './constants';

const meta: Meta<typeof Timeline> = {
  title: 'Molecules/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TYPOGRAPHY_VARIANTS),
    },
    connectorColor: {
      control: 'select',
      options: Object.values(TIMELINE_CONNECTOR_COLORS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const defaultItems = [
  {
    date: 'February 2022',
    title: 'Application UI code in Tailwind CSS',
    description:
      'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    cta: {
      label: 'Learn more',
      href: '#',
    },
  },
  {
    date: 'March 2022',
    title: 'Marketing UI design in Figma',
    description:
      'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    date: 'April 2022',
    title: 'E-Commerce UI code in Tailwind CSS',
    description:
      'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
];

export const Default: Story = {
  args: {
    data: defaultItems,
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const WithIcons: Story = {
  args: {
    data: defaultItems.map((item, _index) => ({
      ...item,
      icon: '📅',
    })),
    variant: TYPOGRAPHY_VARIANTS.body2,
  },
};

export const PrimaryConnector: Story = {
  args: {
    data: defaultItems,
    variant: TYPOGRAPHY_VARIANTS.body2,
    connectorColor: TIMELINE_CONNECTOR_COLORS.primary,
  },
};

export const NoConnector: Story = {
  args: {
    data: defaultItems,
    variant: TYPOGRAPHY_VARIANTS.body2,
    showConnector: false,
  },
};

export const AccentConnector: Story = {
  args: {
    data: defaultItems,
    variant: TYPOGRAPHY_VARIANTS.body2,
    connectorColor: TIMELINE_CONNECTOR_COLORS.accent,
  },
};
