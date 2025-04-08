import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip content',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Default tooltip
      </button>
    ),
  },
};

export const LightStyle: Story = {
  args: {
    content: 'Light tooltip content',
    style: 'light',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Light tooltip
      </button>
    ),
  },
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click to show tooltip',
    triggerType: 'click',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Click tooltip
      </button>
    ),
  },
};

export const TopPlacement: Story = {
  args: {
    content: 'Tooltip on top',
    placement: 'top',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Top tooltip
      </button>
    ),
  },
};

export const RightPlacement: Story = {
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Right tooltip
      </button>
    ),
  },
};

export const LeftPlacement: Story = {
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Left tooltip
      </button>
    ),
  },
};

export const WithCallbacks: Story = {
  args: {
    content: 'Tooltip with callbacks',
    onShow: () => console.log('Tooltip shown'),
    onHide: () => console.log('Tooltip hidden'),
    onToggle: () => console.log('Tooltip toggled'),
    children: (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Callback tooltip
      </button>
    ),
  },
};
