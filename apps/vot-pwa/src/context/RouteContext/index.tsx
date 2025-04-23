'use client';

import { createContext, useContext } from 'resurrection';
import { usePathname } from 'next/navigation';
import { RouteState } from './types';

export const RouteContext = createContext<RouteState>({
  pathname: 'default',
  segment: 'default',
});

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const segment = pathname.split('/')[1] || 'default';

  return (
    <RouteContext.Provider value={{ pathname, segment }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteSegment = () => {
  const context = useContext(RouteContext);
  if (!context)
    throw new Error('useRouteSegment must be used within RouteProvider');
  return context.segment;
};
