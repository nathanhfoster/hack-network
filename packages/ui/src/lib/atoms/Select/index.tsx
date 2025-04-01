import type { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({
  className = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
  options,
  ...restOfProps
}) => (
  <select {...restOfProps} className={className}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
