'use client';

import { useEffect } from 'react';
import { combineClassNames } from '../../../utils';
import type { ModalProps } from './types';
import {
  MODAL_SIZES,
  MODAL_COLORS,
  MODAL_BASE_CLASSES,
  MODAL_BACKDROP_CLASSES,
  MODAL_CONTENT_CLASSES,
  MODAL_HEADER_CLASSES,
  MODAL_BODY_CLASSES,
  MODAL_FOOTER_CLASSES,
  MODAL_CLOSE_BUTTON_CLASSES,
} from './constants';

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  title,
  footer,
  size = 'md',
  color = 'blue',
  dismissible = true,
  className,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  onShow,
  onHide,
  onToggle,
}) => {
  useEffect(() => {
    if (show) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [show, onShow, onHide]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dismissible) {
        onClose();
        onToggle?.();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [show, dismissible, onClose, onToggle]);

  if (!show) return null;

  return (
    <div
      className={combineClassNames(MODAL_BASE_CLASSES, className)}
      onClick={dismissible ? onClose : undefined}
    >
      <div className={MODAL_BACKDROP_CLASSES} />
      <div
        className={combineClassNames(
          MODAL_CONTENT_CLASSES,
          MODAL_SIZES[size],
          contentClassName,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            className={combineClassNames(MODAL_HEADER_CLASSES, headerClassName)}
          >
            <h3
              className={combineClassNames(
                'text-xl font-semibold',
                MODAL_COLORS[color],
              )}
            >
              {title}
            </h3>
            {dismissible && (
              <button
                type="button"
                className={MODAL_CLOSE_BUTTON_CLASSES}
                onClick={onClose}
                aria-label="Close"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={combineClassNames(MODAL_BODY_CLASSES, bodyClassName)}>
          {children}
        </div>
        {footer && (
          <div
            className={combineClassNames(MODAL_FOOTER_CLASSES, footerClassName)}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
