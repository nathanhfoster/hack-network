import type { JSX } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export const TYPOGRAPHY_VARIANTS: Record<TypographyVariant, TypographyVariant> =
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'body1',
    body2: 'body2',
    caption: 'caption',
    overline: 'overline',
  };

export const TYPOGRAPHY_COLORS: Record<TypographyColor, TypographyColor> = {
  primary: 'primary',
  secondary: 'secondary',
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
  inherit: 'inherit',
};

export const TYPOGRAPHY_VARIANT_MAPPING: Record<
  TypographyVariant,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const TYPOGRAPHY_VARIANT_STYLES: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
  overline: 'text-xs uppercase tracking-wider',
};

export const TYPOGRAPHY_COLOR_STYLES: Record<TypographyColor, string> = {
  primary: 'text-blue-600 dark:text-blue-500',
  secondary: 'text-gray-600 dark:text-gray-400',
  error: 'text-red-600 dark:text-red-500',
  warning: 'text-yellow-600 dark:text-yellow-500',
  info: 'text-blue-600 dark:text-blue-500',
  success: 'text-green-600 dark:text-green-500',
  inherit: 'text-inherit',
};
