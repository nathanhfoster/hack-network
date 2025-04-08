import type { ReactNode } from 'react';

export interface Step {
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: 'complete' | 'current' | 'upcoming';
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
  onStepClick?: (stepIndex: number) => void;
  variant?: 'default' | 'progress' | 'vertical';
}
