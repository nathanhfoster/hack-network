'use client';

import { useEffect, useRef, useState } from 'react';
import { combineClassNames } from '../../../utils';
import type { TooltipProps } from './types';
import {
  TOOLTIP_BASE_CLASSES,
  TOOLTIP_STYLES,
  TOOLTIP_ARROW_CLASSES,
} from './constants';

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'bottom',
  style = 'dark',
  triggerType = 'hover',
  className,
  contentClassName,
  onShow,
  onHide,
  onToggle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    if (!trigger || !tooltip) return;

    const handleTrigger = () => {
      setIsVisible((prev) => !prev);
      onToggle?.();
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      onShow?.();
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      onHide?.();
    };

    if (triggerType === 'click') {
      trigger.addEventListener('click', handleTrigger);
    } else {
      trigger.addEventListener('mouseenter', handleMouseEnter);
      trigger.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (triggerType === 'click') {
        trigger.removeEventListener('click', handleTrigger);
      } else {
        trigger.removeEventListener('mouseenter', handleMouseEnter);
        trigger.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [triggerType, onShow, onHide, onToggle]);

  return (
    <div
      className={combineClassNames('relative inline-block', className)}
      ref={triggerRef}
    >
      {children}
      <div
        ref={tooltipRef}
        role="tooltip"
        className={combineClassNames(
          TOOLTIP_BASE_CLASSES,
          TOOLTIP_STYLES[style],
          contentClassName,
          isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        data-tooltip-placement={placement}
      >
        {content}
        <div className={TOOLTIP_ARROW_CLASSES} data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Tooltip;
