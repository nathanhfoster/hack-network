import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300',
  ...restOfProps
}) => <div {...restOfProps} className={className} />;

export default Card;
