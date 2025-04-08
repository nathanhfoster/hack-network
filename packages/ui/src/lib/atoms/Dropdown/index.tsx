'use client';

import { FC } from 'react';
import Button from '../Button';
import { combineClassNames } from '../../../utils';
import type { DropdownProps } from './types';
import {
  DROPDOWN_BASE_CLASSES,
  DROPDOWN_TRIGGER_CLASSES,
  DROPDOWN_MENU_CLASSES,
  DROPDOWN_ITEM_CLASSES,
} from './constants';

const Dropdown: FC<DropdownProps> = ({
  label,
  items,
  trigger,
  className,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={combineClassNames(DROPDOWN_BASE_CLASSES, className)}>
      <Button
        variant="primary"
        className={DROPDOWN_TRIGGER_CLASSES}
        onClick={onToggle}
      >
        {trigger || (
          <>
            {label}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </>
        )}
      </Button>
      {isOpen && (
        <div className={DROPDOWN_MENU_CLASSES} role="menu">
          <div className="py-1" role="none">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={DROPDOWN_ITEM_CLASSES}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
