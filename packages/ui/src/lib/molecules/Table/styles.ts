import { combineClassNames } from '../../../utils';

export interface StyleClasses {
  table: string;
  thead: string;
  tbody: string;
  tr: string;
}

export interface UseStylesProps {
  bordered: boolean;
  striped: boolean;
  hoverable: boolean;
  className?: string;
}

export interface UseStylesResult {
  classes: StyleClasses;
}

export const useStyles = ({
  bordered,
  striped,
  hoverable,
  className,
}: UseStylesProps): UseStylesResult => {
  const tableClasses = combineClassNames(
    'w-full text-sm text-left rtl:text-right text-gray-500',
    bordered && 'border border-gray-200',
    className,
  );

  const theadClasses = combineClassNames(
    'text-xs text-gray-700 uppercase bg-gray-50',
    bordered && 'border-b border-gray-200',
  );

  const tbodyClasses = combineClassNames(
    'divide-y divide-gray-200',
    bordered && 'border-b border-gray-200',
  );

  const trClasses = combineClassNames(
    'bg-white',
    striped && 'odd:bg-white even:bg-gray-50',
    hoverable && 'hover:bg-gray-50 cursor-pointer',
  );

  return {
    classes: {
      table: tableClasses,
      thead: theadClasses,
      tbody: tbodyClasses,
      tr: trClasses,
    },
  };
};
