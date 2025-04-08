import type { ReactNode } from 'react';

export interface ChatBubbleProps {
  children: ReactNode;
  className?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  sender?: string;
  timestamp?: string;
  status?: string;
  variant?: 'default' | 'outline' | 'clean';
  isSender?: boolean;
}

export interface ChatBubbleContentProps {
  children: ReactNode;
  className?: string;
}

export interface ChatBubbleHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface ChatBubbleFooterProps {
  children: ReactNode;
  className?: string;
}
