export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterGroupProps {
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  children?: React.ReactNode;
}
