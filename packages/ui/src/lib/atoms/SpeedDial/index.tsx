'use client';

import { combineClassNames } from '../../../utils';
import type { SpeedDialProps } from './types';
import {
  SPEED_DIAL_BASE_CLASSES,
  SPEED_DIAL_TRIGGER_CLASSES,
  SPEED_DIAL_ACTIONS_CLASSES,
  SPEED_DIAL_ACTION_CLASSES,
  SPEED_DIAL_TOOLTIP_CLASSES,
  SPEED_DIAL_POSITIONS,
  SPEED_DIAL_DIRECTIONS,
} from './constants';
import { useBooleanToggler } from 'resurrection';

const SpeedDial: React.FC<SpeedDialProps> = ({
  actions,
  position = 'bottom',
  direction = 'up',
  className,
  triggerIcon,
  triggerLabel = 'Open speed dial',
  triggerType = 'hover',
  onShow,
  onHide,
  onToggle,
}) => {
  const [isOpen, toggleIsOpen] = useBooleanToggler(false);

  const handleMouseEnter = () => {
    if (triggerType === 'hover') {
      toggleIsOpen(true);
      onShow?.();
    }
  };

  const handleMouseLeave = () => {
    if (triggerType === 'hover') {
      toggleIsOpen(false);
      onHide?.();
    }
  };

  const handleClick = () => {
    if (triggerType === 'click') {
      toggleIsOpen(!isOpen);
      onToggle?.(isOpen);
    }
  };

  return (
    <div
      className={combineClassNames(
        SPEED_DIAL_BASE_CLASSES,
        SPEED_DIAL_POSITIONS[position],
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={combineClassNames(
          SPEED_DIAL_ACTIONS_CLASSES,
          SPEED_DIAL_DIRECTIONS[direction],
          isOpen ? 'group-hover:flex' : '',
        )}
      >
        {actions.map((action, index) => (
          <button
            key={index}
            type="button"
            className={SPEED_DIAL_ACTION_CLASSES}
            onClick={action.onClick}
          >
            {action.icon}
            {action.tooltip && (
              <div className={SPEED_DIAL_TOOLTIP_CLASSES} role="tooltip">
                {action.tooltip}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-controls="speed-dial-menu-default"
        aria-expanded={isOpen}
        className={SPEED_DIAL_TRIGGER_CLASSES}
        onClick={handleClick}
      >
        {triggerIcon}
        <span className="sr-only">{triggerLabel}</span>
      </button>
    </div>
  );
};

export default SpeedDial;
