import type { ChatBubbleProps } from './types';

export const CHAT_BUBBLE_BASE_CLASSES = 'flex items-start gap-2.5';

export const CHAT_BUBBLE_AVATAR_CLASSES = 'w-8 h-8 rounded-full';

export const CHAT_BUBBLE_CONTENT_BASE_CLASSES =
  'flex flex-col w-full max-w-[320px] leading-1.5';

export const CHAT_BUBBLE_VARIANT_STYLES: Record<
  NonNullable<ChatBubbleProps['variant']>,
  string
> = {
  default:
    'p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700',
  outline:
    'p-4 border border-gray-200 rounded-e-xl rounded-es-xl dark:border-gray-700',
  clean: 'p-4',
};

export const CHAT_BUBBLE_SENDER_STYLES = {
  default: 'rounded-s-xl rounded-es-xl',
  outline: 'rounded-s-xl rounded-es-xl',
  clean: '',
};

export const CHAT_BUBBLE_HEADER_CLASSES =
  'flex items-center space-x-2 rtl:space-x-reverse';

export const CHAT_BUBBLE_SENDER_CLASSES =
  'text-sm font-semibold text-gray-900 dark:text-white';

export const CHAT_BUBBLE_TIMESTAMP_CLASSES =
  'text-sm font-normal text-gray-500 dark:text-gray-400';

export const CHAT_BUBBLE_MESSAGE_CLASSES =
  'text-sm font-normal py-2.5 text-gray-900 dark:text-white';

export const CHAT_BUBBLE_STATUS_CLASSES =
  'text-sm font-normal text-gray-500 dark:text-gray-400';
