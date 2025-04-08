import type { Meta, StoryObj } from '@storybook/react';
import Banner from '.';
import { BANNER_POSITIONS, BANNER_VARIANTS } from './constants';

const meta: Meta<typeof Banner> = {
  title: 'Atoms/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: Object.keys(BANNER_POSITIONS),
    },
    variant: {
      control: 'select',
      options: Object.keys(BANNER_VARIANTS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: 'New brand identity has been launched for the Flowbite Library',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'New brand identity has been launched for the Flowbite Library',
    icon: (
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
      </svg>
    ),
  },
};

export const WithCta: Story = {
  args: {
    children: 'New brand identity has been launched for the Flowbite Library',
    icon: (
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
      </svg>
    ),
    cta: {
      label: 'Learn more',
      href: 'https://flowbite.com',
    },
  },
};

export const WithSecondaryCta: Story = {
  args: {
    children: 'New brand identity has been launched for the Flowbite Library',
    icon: (
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
      </svg>
    ),
    cta: {
      label: 'Get started',
      href: '#',
      icon: (
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      ),
    },
    secondaryCta: {
      label: 'Learn more',
      href: '#',
      icon: (
        <svg
          className="w-3 h-3 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
        </svg>
      ),
    },
  },
};

export const Newsletter: Story = {
  args: {
    variant: 'newsletter',
    children: 'Sign up for our newsletter',
    form: {
      label: 'Sign up for our newsletter',
      placeholder: 'Enter your email',
      buttonLabel: 'Subscribe',
      onSubmit: (email) => console.log('Subscribed:', email),
    },
  },
};

export const Informational: Story = {
  args: {
    variant: 'informational',
    title: 'Integration is the key',
    children:
      'You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind CSS.',
    cta: {
      label: 'Get started',
      href: '#',
      icon: (
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      ),
    },
    secondaryCta: {
      label: 'Learn more',
      href: '#',
      icon: (
        <svg
          className="w-3 h-3 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
        </svg>
      ),
    },
  },
};

export const BottomPosition: Story = {
  args: {
    position: 'bottom',
    children: 'Get 5% commission per sale',
    cta: {
      label: 'Become a partner',
      href: '#',
    },
  },
};

export const Dismissible: Story = {
  args: {
    children: 'New brand identity has been launched for the Flowbite Library',
    dismissible: true,
    onDismiss: () => alert('Banner dismissed!'),
  },
};
