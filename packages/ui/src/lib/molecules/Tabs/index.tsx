'use client';

import { useState } from 'react';
import type { TabsProps } from './types';
import Tab from '@atoms/Tab';
import { isNotNotTrue } from '@hack-network/utils';

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab: initialActiveTab,
  onTabChange,
  className = '',
  variant = 'default',
  fullWidth = false,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || items[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={className}>
      <ul
        className={`flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ${
          fullWidth ? 'w-full' : ''
        }`}
      >
        {items.map((item) => (
          <li key={item.id} className={fullWidth ? 'flex-1' : 'me-2'}>
            <Tab
              id={item.id}
              label={item.label}
              isActive={activeTab === item.id}
              isDisabled={isNotNotTrue(item.disabled)}
              icon={item.icon}
              onClick={handleTabClick}
              variant={variant}
              fullWidth={fullWidth}
            />
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={activeTab === item.id ? 'block' : 'hidden'}
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
