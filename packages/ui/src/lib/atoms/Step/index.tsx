import { combineClassNames } from '../../../utils';
import type { FC } from 'react';
import {
  STEPPER_BASE_CLASSES,
  STEPPER_STATUS_CLASSES,
  STEPPER_VARIANTS,
} from './constants';
import type { StepProps } from './types';

const Step: FC<StepProps> = ({
  step,
  index,
  currentStep,
  variant,
  className,
  onStepClick,
}) => {
  const isComplete = index < currentStep;
  const isCurrent = index === currentStep;

  return (
    <div
      className={combineClassNames(
        'flex items-center',
        variant === STEPPER_VARIANTS.vertical ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      <div
        className={combineClassNames(
          STEPPER_BASE_CLASSES,
          STEPPER_STATUS_CLASSES[
            isComplete ? 'complete' : isCurrent ? 'current' : 'upcoming'
          ],
        )}
        onClick={() => onStepClick?.(index)}
      >
        {step.icon || (
          <span className="text-sm font-medium">
            {isComplete ? '✓' : index + 1}
          </span>
        )}
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          {step.title}
        </h3>
        {step.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {step.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step;
