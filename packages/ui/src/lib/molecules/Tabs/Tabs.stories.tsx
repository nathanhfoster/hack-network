import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '.';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Profile Content
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          This is the profile tab content. You can put any content here.
        </p>
      </div>
    ),
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    content: (
      <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Dashboard Content
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          This is the dashboard tab content. You can put any content here.
        </p>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Settings Content
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          This is the settings tab content. You can put any content here.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    data: defaultItems,
  },
};

export const WithIcons: Story = {
  args: {
    data: defaultItems.map((item, index) => ({
      ...item,
      icon: (
        <svg
          key={index}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    })),
  },
};

export const WithDisabledTab: Story = {
  args: {
    data: [
      ...defaultItems.slice(0, 2),
      {
        ...defaultItems[2],
        disabled: true,
      },
    ],
  },
};

export const UnderlineVariant: Story = {
  args: {
    data: defaultItems,
    variant: 'underline',
  },
};

export const PillsVariant: Story = {
  args: {
    data: defaultItems,
    variant: 'pills',
  },
};

export const FullWidth: Story = {
  args: {
    data: defaultItems,
    fullWidth: true,
  },
};

export const WithActiveTab: Story = {
  args: {
    data: defaultItems,
    activeTab: 'dashboard',
  },
};
