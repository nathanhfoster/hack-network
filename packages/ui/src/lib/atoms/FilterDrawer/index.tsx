import { FC, Fragment, useTransition } from 'react';
import { combineClassNames } from '../../../utils';

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FilterDrawer: FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Fragment>
      {/* Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ${
            isPending ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-0 overflow-hidden ${isOpen ? 'overflow-hidden' : ''}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {isOpen && (
              <div
                className={combineClassNames(
                  'pointer-events-auto w-screen max-w-md transform transition-transform duration-500',
                  isPending ? 'translate-x-full' : 'translate-x-0',
                  className,
                )}
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          onClick={() => startTransition(onClose)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1">{children}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterDrawer;
