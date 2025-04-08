import { combineClassNames } from '../../../utils';
import type { AsideProps } from './types';
import type { FC } from 'react';
import Typography from '../../atoms/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';
import {
  ASIDE_POSITIONS,
  ASIDE_BACKGROUND_COLORS,
  ASIDE_POSITION_STYLES,
  ASIDE_BACKGROUND_STYLES,
} from './constants';

const Aside: FC<AsideProps> = ({
  title,
  content,
  variant = TYPOGRAPHY_VARIANTS.body1,
  position = ASIDE_POSITIONS.right,
  className,
  icon,
  isSticky = false,
  backgroundColor = ASIDE_BACKGROUND_COLORS.default as keyof typeof ASIDE_BACKGROUND_STYLES,
}) => {
  return (
    <aside
      className={combineClassNames(
        'p-4 rounded-lg',
        ASIDE_POSITION_STYLES[position],
        ASIDE_BACKGROUND_STYLES[backgroundColor],
        isSticky && 'sticky top-4',
        className,
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <div className="text-lg">{icon}</div>}
          {title && (
            <Typography variant={TYPOGRAPHY_VARIANTS.h5}>{title}</Typography>
          )}
        </div>
      )}
      <Typography variant={variant}>{content}</Typography>
    </aside>
  );
};

export default Aside;
