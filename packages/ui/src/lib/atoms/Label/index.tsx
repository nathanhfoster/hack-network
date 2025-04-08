import type { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({
  className = 'block text-sm font-medium text-gray-700 mb-1',
  ...restOfProps
}) => <label {...restOfProps} className={className} />;

export default Label;
