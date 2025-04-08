import { combineClassNames } from '../../../utils';
import type { StepperProps } from './types';
import type { FC } from 'react';
import { STEPPER_VARIANTS } from '../../atoms/Step/constants';
import Step from '../../atoms/Step';

const Stepper: FC<StepperProps> = ({
  steps,
  currentStep,
  className,
  onStepClick,
  variant = STEPPER_VARIANTS.default,
}) => {
  return (
    <div
      className={combineClassNames(
        'flex gap-4',
        variant === STEPPER_VARIANTS.vertical ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {steps.map((step, index) => (
        <div key={`step-${index}`} className="flex items-center">
          <Step
            step={step}
            index={index}
            currentStep={currentStep}
            variant={variant}
            onStepClick={onStepClick}
          />
          {index < steps.length - 1 && (
            <div
              className={combineClassNames(
                'h-0.5 w-full bg-gray-200 dark:bg-gray-700',
                variant === STEPPER_VARIANTS.vertical
                  ? 'w-0.5 h-full'
                  : 'w-full h-0.5',
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
