import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  className = 'border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
  ...restOfProps
}) => <input {...restOfProps} className={className} />;

export default Input;
