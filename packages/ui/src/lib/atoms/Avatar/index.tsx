import { combineClassNames } from '../../../utils';
import type { AvatarProps } from './types';
import type { FC } from 'react';
import {
  AVATAR_BORDER_STYLES,
  AVATAR_SHAPES,
  AVATAR_SIZES,
  AVATAR_STATUS_POSITIONS,
  AVATAR_STATUS_STYLES,
  AVATAR_STACKED_STYLES,
  DEFAULT_AVATAR,
} from './constants';

const Avatar: FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  shape = 'rounded',
  status,
  statusPosition = 'top-right',
  bordered = false,
  stacked = false,
  className,
  children,
}) => {
  return (
    <div
      className={combineClassNames(
        'relative',
        AVATAR_SIZES[size],
        AVATAR_SHAPES[shape],
        bordered && AVATAR_BORDER_STYLES.default,
        stacked && AVATAR_STACKED_STYLES.default,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={combineClassNames(
            'w-full h-full object-cover',
            AVATAR_SHAPES[shape],
          )}
        />
      ) : (
        children || DEFAULT_AVATAR
      )}
      {status && (
        <span
          className={combineClassNames(
            'absolute w-3.5 h-3.5',
            AVATAR_STATUS_STYLES[status],
            AVATAR_STATUS_POSITIONS[statusPosition],
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
