import { type FC } from 'react';
import {
  BREADCRUMB_BASE_CLASSES,
  BREADCRUMB_CURRENT_ITEM_CLASSES,
  BREADCRUMB_ITEM_CLASSES,
  BREADCRUMB_LINK_CLASSES,
  BREADCRUMB_LIST_CLASSES,
  BREADCRUMB_VARIANTS,
  DEFAULT_HOME_ICON,
  DEFAULT_SEPARATOR,
} from './constants';
import type { BreadcrumbProps } from './types';

const Breadcrumb: FC<BreadcrumbProps> = ({
  data,
  className = '',
  variant = 'default',
  separator = DEFAULT_SEPARATOR,
}) => {
  return (
    <nav
      className={`${BREADCRUMB_BASE_CLASSES} ${BREADCRUMB_VARIANTS[variant]} ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className={BREADCRUMB_LIST_CLASSES}>
        {data.map((item, index) => (
          <li key={item.label} className={BREADCRUMB_ITEM_CLASSES}>
            {index > 0 && separator}
            {index === 0 && !item.icon && DEFAULT_HOME_ICON}
            {item.href ? (
              <a href={item.href} className={BREADCRUMB_LINK_CLASSES}>
                {item.icon}
                {item.label}
              </a>
            ) : (
              <span className={BREADCRUMB_CURRENT_ITEM_CLASSES}>
                {item.icon}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
