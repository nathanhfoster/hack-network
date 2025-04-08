import type { Meta, StoryObj } from '@storybook/react';
import GridItem from './index';
import Grid from '../Grid';

const meta = {
  title: 'Atoms/GridItem',
  component: GridItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GridItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-blue-100 p-4">Grid Item</div>,
  },
};

export const WithSpan: Story = {
  args: {
    span: 2,
    children: <div className="bg-blue-100 p-4">Spans 2 columns</div>,
  },
  decorators: [
    (Story) => (
      <Grid cols={3}>
        <Story />
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
      </Grid>
    ),
  ],
};

export const Responsive: Story = {
  args: {
    span: 1,
    sm: 2,
    md: 3,
    lg: 4,
    children: <div className="bg-blue-100 p-4">Responsive span</div>,
  },
  decorators: [
    (Story) => (
      <Grid cols={4}>
        <Story />
        <div className="bg-blue-100 p-4">Item 2</div>
        <div className="bg-blue-100 p-4">Item 3</div>
        <div className="bg-blue-100 p-4">Item 4</div>
      </Grid>
    ),
  ],
};

export const WithStartAndEnd: Story = {
  args: {
    start: 2,
    end: 4,
    children: <div className="bg-blue-100 p-4">Starts at 2, ends at 4</div>,
  },
  decorators: [
    (Story) => (
      <Grid cols={4}>
        <div className="bg-blue-100 p-4">Item 1</div>
        <Story />
        <div className="bg-blue-100 p-4">Item 5</div>
      </Grid>
    ),
  ],
};

export const WithResponsiveStartAndEnd: Story = {
  args: {
    start: 1,
    end: 2,
    smStart: 2,
    smEnd: 3,
    mdStart: 3,
    mdEnd: 4,
    children: <div className="bg-blue-100 p-4">Responsive positioning</div>,
  },
  decorators: [
    (Story) => (
      <Grid cols={4}>
        <div className="bg-blue-100 p-4">Item 1</div>
        <Story />
        <div className="bg-blue-100 p-4">Item 5</div>
      </Grid>
    ),
  ],
};
