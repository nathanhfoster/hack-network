import type { ReactNode } from 'react';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

export type ArticleVariant =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export interface ArticleProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  content: ReactNode;
  variant?: ArticleVariant;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
}
