'use client';

import React from 'react';
import { InstallPromptContextType, InstallPromptProviderProps } from './types';
import { useInstallPromptHandler } from './hooks';
import { createContext } from 'use-context-selector';

export const InstallPromptContext = createContext<
  InstallPromptContextType | undefined
>(undefined);

export const InstallPromptProvider: React.FC<InstallPromptProviderProps> = ({
  children,
}) => {
  const value = useInstallPromptHandler();

  return (
    <InstallPromptContext.Provider value={value}>
      {children}
    </InstallPromptContext.Provider>
  );
};
