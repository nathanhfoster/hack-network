import type { StepStatus, StepVariant } from './types';

export const STEPPER_BASE_CLASSES =
  'flex items-center justify-center w-10 h-10 rounded-full shrink-0';

export const STEPPER_STATUS_CLASSES: Record<StepStatus, string> = {
  complete: 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300',
  current: 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300',
  upcoming: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
};

export const STEPPER_VARIANTS: Record<StepVariant, StepVariant> = {
  default: 'default',
  progress: 'progress',
  vertical: 'vertical',
};
