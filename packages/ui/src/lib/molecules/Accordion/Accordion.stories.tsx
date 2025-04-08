import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '.';
import { ACCORDION_COLORS, ACCORDION_VARIANTS } from './constants';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ACCORDION_VARIANTS),
    },
    color: {
      control: 'select',
      options: Object.values(ACCORDION_COLORS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  {
    title: 'What is Flowbite?',
    content: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
    ),
  },
  {
    title: 'Is there a Figma file available?',
    content: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software
        so everything you see in the library has a design equivalent in our
        Figma file.
      </p>
    ),
  },
  {
    title: 'What are the differences between Flowbite and Tailwind UI?',
    content: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open
        source under the MIT license, whereas Tailwind UI is a paid product.
      </p>
    ),
  },
];

export const Default: Story = {
  args: {
    data: defaultItems,
  },
};

export const AlwaysOpen: Story = {
  args: {
    data: defaultItems,
    alwaysOpen: true,
  },
};

export const Flush: Story = {
  args: {
    data: defaultItems,
    variant: ACCORDION_VARIANTS.flush,
  },
};

export const Bordered: Story = {
  args: {
    data: defaultItems,
    variant: ACCORDION_VARIANTS.bordered,
  },
};

export const Primary: Story = {
  args: {
    data: defaultItems,
    color: ACCORDION_COLORS.primary,
  },
};

export const Success: Story = {
  args: {
    data: defaultItems,
    color: ACCORDION_COLORS.success,
  },
};

export const Danger: Story = {
  args: {
    data: defaultItems,
    color: ACCORDION_COLORS.danger,
  },
};

export const Warning: Story = {
  args: {
    data: defaultItems,
    color: ACCORDION_COLORS.warning,
  },
};

export const Info: Story = {
  args: {
    data: defaultItems,
    color: ACCORDION_COLORS.info,
  },
};

export const WithIcons: Story = {
  args: {
    data: defaultItems.map((item, _index) => ({
      ...item,
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    })),
  },
};

export const WithCustomContent: Story = {
  args: {
    data: [
      {
        title: 'Custom Content Example',
        content: (
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              This is a paragraph of text.
            </p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
            <button className="text-blue-600 dark:text-blue-500 hover:underline">
              Learn more
            </button>
          </div>
        ),
      },
    ],
  },
};
