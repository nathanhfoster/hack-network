'use client'

import type { TableProps } from './types'
import { ReactNode } from 'react'

const Table = <T extends object>({
  data,
  columns,
  striped = false,
  hoverable = false,
  bordered = false,
  className = '',
  onRowClick
}: TableProps<T>) => {
  const tableClasses = [
    'w-full text-sm text-left rtl:text-right text-gray-500',
    bordered && 'border border-gray-200',
    className
  ]
    .filter(Boolean)
    .join(' ')

  const theadClasses = [
    'text-xs text-gray-700 uppercase bg-gray-50',
    bordered && 'border-b border-gray-200'
  ]
    .filter(Boolean)
    .join(' ')

  const tbodyClasses = [
    'divide-y divide-gray-200',
    bordered && 'border-b border-gray-200'
  ]
    .filter(Boolean)
    .join(' ')

  const trClasses = [
    'bg-white',
    striped && 'odd:bg-white even:bg-gray-50',
    hoverable && 'hover:bg-gray-50 cursor-pointer'
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className={tableClasses}>
        <thead className={theadClasses}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyClasses}>
          {data.map((item, index) => (
            <tr
              key={index}
              className={trClasses}
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
  )
}

export default Table
