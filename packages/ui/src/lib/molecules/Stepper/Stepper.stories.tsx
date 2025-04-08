import type { Meta, StoryObj } from '@storybook/react';
import Stepper from '.';
import type { StepperProps } from './types';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps: StepperProps['steps'] = [
  {
    title: 'Personal Info',
    description: 'Enter your personal details',
  },
  {
    title: 'Account Info',
    description: 'Set up your account',
  },
  {
    title: 'Confirmation',
    description: 'Review and confirm',
  },
];

export const Default: Story = {
  args: {
    steps,
    currentStep: 0,
  },
};

export const WithProgress: Story = {
  args: {
    steps,
    currentStep: 1,
    variant: 'progress',
  },
};

export const Vertical: Story = {
  args: {
    steps,
    currentStep: 2,
    variant: 'vertical',
  },
};

export const WithIcons: Story = {
  args: {
    steps: [
      {
        title: 'Personal Info',
        description: 'Enter your personal details',
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ),
      },
      {
        title: 'Account Info',
        description: 'Set up your account',
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        title: 'Confirmation',
        description: 'Review and confirm',
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
    currentStep: 1,
  },
};
