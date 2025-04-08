import type { Meta, StoryObj } from '@storybook/react';
import SpeedDial from '.';
import type { SpeedDialProps } from './types';

const meta: Meta<SpeedDialProps> = {
  title: 'Atoms/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'],
    },
    triggerType: {
      control: 'select',
      options: ['hover', 'click'],
    },
  },
};

export default meta;
type Story = StoryObj<SpeedDialProps>;

const defaultActions = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
      </svg>
    ),
    tooltip: 'Notifications',
    onClick: () => console.log('Notifications clicked'),
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fillRule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip: 'View',
    onClick: () => console.log('View clicked'),
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip: 'More',
    onClick: () => console.log('More clicked'),
  },
];

const defaultTriggerIcon = (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

export const Default: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
  },
};

export const TopPosition: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    position: 'top',
  },
};

export const RightPosition: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    position: 'right',
  },
};

export const LeftPosition: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    position: 'left',
  },
};

export const DownDirection: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    direction: 'down',
  },
};

export const LeftDirection: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    direction: 'left',
  },
};

export const RightDirection: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    direction: 'right',
  },
};

export const ClickTrigger: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    triggerType: 'click',
  },
};

export const CustomActions: Story = {
  args: {
    actions: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        ),
        tooltip: 'View',
        onClick: () => console.log('View clicked'),
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm2 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm2 3a1 1 0 011-1h.01a1 1 0 110 2H15a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ),
        tooltip: 'Edit',
        onClick: () => console.log('Edit clicked'),
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ),
        tooltip: 'Delete',
        onClick: () => console.log('Delete clicked'),
      },
    ],
    triggerIcon: defaultTriggerIcon,
  },
};

export const WithEventHandlers: Story = {
  args: {
    actions: defaultActions,
    triggerIcon: defaultTriggerIcon,
    onShow: () => console.log('Speed dial opened'),
    onHide: () => console.log('Speed dial closed'),
    onToggle: (isOpen) => console.log('Speed dial toggled:', isOpen),
  },
};
