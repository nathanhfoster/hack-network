import type { SearchInputProps } from './types';
import type { FC } from 'react';
import { Input } from '../../atoms';

const SearchInput: FC<SearchInputProps> = ({
  onSearch,
  onChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onSearch?.(e.target.value);
  };

  return <Input onChange={handleChange} {...props} />;
};

export default SearchInput;
