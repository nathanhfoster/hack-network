import type { ReactNode } from 'react';
import type { DataComponent } from '../../../types';

export interface CarouselItem {
  id: string;
  content: ReactNode;
  alt?: string;
}

export interface CarouselProps extends DataComponent<CarouselItem> {
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
}
