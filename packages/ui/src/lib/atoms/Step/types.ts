import type { ReactNode } from 'react';

export type StepStatus = 'complete' | 'current' | 'upcoming';
export type StepVariant = 'default' | 'progress' | 'vertical';

export interface StepType {
  title: string;
  description?: string;
  icon?: ReactNode;
  isCompleted?: boolean;
  isActive?: boolean;
}

export interface StepProps {
  step: StepType;
  index: number;
  currentStep: number;
  variant: StepVariant;
  className?: string;
  onStepClick?: (index: number) => void;
}
