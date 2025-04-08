import type { ReactNode } from 'react';

export type VideoSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export interface VideoSource {
  src: string;
  type: string;
}

export interface VideoProps {
  sources: VideoSource[];
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  fallback?: ReactNode;
}
