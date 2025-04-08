import { combineClassNames } from '../../../utils';
import type { TypographyProps } from './types';
import type { FC, ElementType } from 'react';
import {
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_VARIANT_MAPPING,
  TYPOGRAPHY_VARIANT_STYLES,
  TYPOGRAPHY_COLOR_STYLES,
} from './constants';

const Typography: FC<TypographyProps> = ({
  variant = TYPOGRAPHY_VARIANTS.body1,
  color = TYPOGRAPHY_COLORS.primary,
  children,
  className,
  component,
}) => {
  const Component = (component ||
    TYPOGRAPHY_VARIANT_MAPPING[variant]) as ElementType;
  const baseStyles = TYPOGRAPHY_VARIANT_STYLES[variant];
  const colorStyle = TYPOGRAPHY_COLOR_STYLES[color];

  return (
    <Component className={combineClassNames(baseStyles, colorStyle, className)}>
      {children}
    </Component>
  );
};

export default Typography;
