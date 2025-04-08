'use client';

import { combineClassNames } from '../../../utils';
import type { AccordionProps } from './types';
import { FC, useState } from 'react';
import {
  ACCORDION_ACTIVE_COLOR_STYLES,
  ACCORDION_COLORS,
  ACCORDION_COLOR_STYLES,
  ACCORDION_VARIANTS,
  ACCORDION_VARIANT_STYLES,
} from './constants';

const Accordion: FC<AccordionProps> = ({
  data,
  variant = ACCORDION_VARIANTS.default,
  color = ACCORDION_COLORS.default,
  alwaysOpen = false,
  className,
  onToggle,
}) => {
  const [openItems, setOpenItems] = useState<number[]>(
    data
      .map((item, index) => (item.isOpen ? index : -1))
      .filter((index) => index !== -1),
  );

  const toggleItem = (index: number) => {
    const newOpenItems = alwaysOpen
      ? openItems.includes(index)
        ? openItems.filter((i) => i !== index)
        : [...openItems, index]
      : openItems.includes(index)
        ? []
        : [index];

    setOpenItems(newOpenItems);
    onToggle?.(index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className={combineClassNames(
        'divide-y divide-gray-200 dark:divide-gray-700',
        ACCORDION_VARIANT_STYLES[variant],
        className,
      )}
    >
      {data.map((item, index) => {
        const isOpen = openItems.includes(index);
        const isFirst = index === 0;
        const isLast = index === data.length - 1;

        return (
          <div key={index}>
            <h2>
              <button
                type="button"
                id={`accordion-collapse-heading-${index}`}
                className={combineClassNames(
                  'flex items-center justify-between w-full p-5 font-medium text-left',
                  isFirst && 'rounded-t-xl',
                  isLast && !isOpen && 'rounded-b-xl',
                  ACCORDION_COLOR_STYLES[color],
                  isOpen && ACCORDION_ACTIVE_COLOR_STYLES[color],
                  item.className,
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={combineClassNames(
                    'w-3 h-3 shrink-0',
                    isOpen ? 'rotate-180' : '',
                  )}
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
                    d="M9 5 5 1 1 5"
                  />
                </svg>
                {item.icon && <div className="ml-3">{item.icon}</div>}
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={combineClassNames(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div
                className={combineClassNames(
                  'p-5 border border-b-0 border-gray-200 dark:border-gray-700',
                  isLast && 'rounded-b-xl',
                )}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
