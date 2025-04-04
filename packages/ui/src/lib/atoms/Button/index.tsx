import type { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  ...restOfProps
}) => <button {...restOfProps} className={className} />;

export default Button;
