import type { TabProps } from './types';
import { combineClassNames } from '../../../utils';
import { getTabStyles } from './constants';

const Tab: React.FC<TabProps> = ({
  id,
  label,
  isActive,
  isDisabled = false,
  icon,
  onClick,
  variant = 'default',
  fullWidth = false,
  className = '',
}) => {
  return (
    <button
      onClick={() => !isDisabled && onClick(id)}
      className={combineClassNames(
        getTabStyles({
          isActive,
          isDisabled,
          variant,
          fullWidth,
        }),
        className,
      )}
      disabled={isDisabled}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-disabled={isDisabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Tab;
