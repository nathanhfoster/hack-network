import { combineClassNames } from '../../../utils';
import type { AvatarGroupProps } from './types';
import type { FC } from 'react';
import { AVATAR_GROUP_STACKED_STYLES } from './constants';

export const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  stacked = false,
  className,
}) => {
  return (
    <div
      className={combineClassNames(
        'flex',
        stacked && AVATAR_GROUP_STACKED_STYLES.default,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AvatarGroup;
