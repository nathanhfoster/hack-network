import type { InputProps } from '../../atoms/Input/types';

export interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void;
}
