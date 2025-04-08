'use client';

import { useEffect, useRef, useState } from 'react';
import { combineClassNames } from '../../../utils';
import type { PopoverProps } from './types';
import {
  POPOVER_BASE_CLASSES,
  POPOVER_ARROW_CLASSES,
  POPOVER_PLACEMENTS,
} from './constants';

export function Popover({
  children,
  content,
  placement = 'bottom',
  triggerType = 'hover',
  offset = 10,
  className,
  onShow,
  onHide,
  onToggle,
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerType === 'click' &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onHide?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [triggerType, onHide]);

  const handleMouseEnter = () => {
    if (triggerType === 'hover') {
      setIsOpen(true);
      onShow?.();
    }
  };

  const handleMouseLeave = () => {
    if (triggerType === 'hover') {
      setIsOpen(false);
      onHide?.();
    }
  };

  const handleClick = () => {
    if (triggerType === 'click') {
      setIsOpen(!isOpen);
      onToggle?.();
    }
  };

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick}>{children}</div>
      <div
        ref={contentRef}
        className={combineClassNames(
          POPOVER_BASE_CLASSES,
          POPOVER_PLACEMENTS[placement],
          isOpen ? 'opacity-100 visible' : '',
          className,
        )}
        style={{ marginTop: offset }}
        role="tooltip"
      >
        {content}
        <div className={POPOVER_ARROW_CLASSES} />
      </div>
    </div>
  );
}
