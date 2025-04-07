import type { StaticImageData } from 'next/image';
import type { ComponentProps } from 'react';

type NextImageProps = ComponentProps<typeof import('next/image').default>;
type ImgProps = ComponentProps<'img'>;

export interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface GalleryTag {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface GalleryProps {
  images: GalleryImage[];
  tags?: GalleryTag[];
  columns?: 2 | 3 | 4;
  className?: string;
  imageClassName?: string;
  containerClassName?: string;
  onTagClick?: (tag: string) => void;
  ImageComponent?: React.ComponentType<NextImageProps | ImgProps>;
}
