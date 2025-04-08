import { FC } from 'react';
import { combineClassNames } from '../../../utils';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(currentPage - halfMaxVisiblePages, 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <nav
      className={combineClassNames(
        'flex items-center justify-center gap-2',
        className,
      )}
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-200 dark:hover:bg-gray-800"
        aria-label="Previous page"
      >
        &larr;
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            1
          </button>
          {startPage > 2 && (
            <span className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              ...
            </span>
          )}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={combineClassNames(
            'relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
            page === currentPage
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800',
          )}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              ...
            </span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-200 dark:hover:bg-gray-800"
        aria-label="Next page"
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Pagination;
