import type { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
  className = 'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
  label,
  ...restOfProps
}) => (
  <div className="flex items-center">
    <input type="checkbox" {...restOfProps} className={className} />
    {label && (
      <label className="ml-2 block text-sm text-gray-900">{label}</label>
    )}
  </div>
);

export default Checkbox;
