import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './index';
import type { PopoverProps } from './types';

const meta: Meta<PopoverProps> = {
  title: 'Atoms/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    triggerType: {
      control: 'select',
      options: ['hover', 'click', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<PopoverProps>;

const defaultTrigger = (
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Default popover
  </button>
);

const defaultContent = (
  <>
    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white">
        Popover title
      </h3>
    </div>
    <div className="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </>
);

export const Default: Story = {
  args: {
    children: defaultTrigger,
    content: defaultContent,
  },
};

export const UserProfile: Story = {
  args: {
    children: defaultTrigger,
    content: (
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <a href="#">
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="Jese Leos"
            />
          </a>
          <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Follow
            </button>
          </div>
        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
          <a href="#">Jese Leos</a>
        </p>
        <p className="mb-3 text-sm font-normal">
          <a href="#" className="hover:underline">
            @jeseleos
          </a>
        </p>
        <p className="mb-4 text-sm">
          Open-source contributor. Building{' '}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            flowbite.com
          </a>
          .
        </p>
        <ul className="flex text-sm">
          <li className="me-2">
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                799
              </span>
              <span>Following</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                3,758
              </span>
              <span>Followers</span>
            </a>
          </li>
        </ul>
      </div>
    ),
  },
};

export const ClickTrigger: Story = {
  args: {
    children: defaultTrigger,
    content: defaultContent,
    triggerType: 'click',
  },
};

export const CustomOffset: Story = {
  args: {
    children: defaultTrigger,
    content: defaultContent,
    offset: 20,
  },
};

export const WithEventHandlers: Story = {
  args: {
    children: defaultTrigger,
    content: defaultContent,
    onShow: () => console.log('Popover shown'),
    onHide: () => console.log('Popover hidden'),
    onToggle: () => console.log('Popover toggled'),
  },
};
