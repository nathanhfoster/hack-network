'use client';

import type { TableProps } from './types';
import { useStyles } from './styles';
import { ReactNode } from 'react';

const Table = <T extends object>({
  data,
  columns,
  striped = false,
  hoverable = false,
  bordered = false,
  className = '',
  onRowClick,
}: TableProps<T>) => {
  const { classes } = useStyles({
    bordered,
    striped,
    hoverable,
    className,
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {data.map((item, index) => (
            <tr
              key={index}
              className={classes.tr}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render
                    ? column.render(item)
                    : (item[column.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
