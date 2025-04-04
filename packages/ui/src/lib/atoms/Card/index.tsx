import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  className = 'bg-white rounded-lg shadow-md p-6',
  ...restOfProps
}) => <div {...restOfProps} className={className} />;

export default Card;
