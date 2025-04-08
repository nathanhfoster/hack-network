import { combineClassNames } from '../../../utils';
import type { ChatBubbleProps } from './types';
import type { FC } from 'react';
import {
  CHAT_BUBBLE_BASE_CLASSES,
  CHAT_BUBBLE_AVATAR_CLASSES,
  CHAT_BUBBLE_CONTENT_BASE_CLASSES,
  CHAT_BUBBLE_VARIANT_STYLES,
  CHAT_BUBBLE_SENDER_STYLES,
  CHAT_BUBBLE_SENDER_CLASSES,
  CHAT_BUBBLE_TIMESTAMP_CLASSES,
} from './constants';
import ChatBubbleContent from './ChatBubbleContent';
import ChatBubbleHeader from './ChatBubbleHeader';
import ChatBubbleFooter from './ChatBubbleFooter';

const ChatBubble: FC<ChatBubbleProps> = ({
  children,
  className,
  avatar,
  sender,
  timestamp,
  status,
  variant = 'default',
  isSender = false,
}) => {
  const getContentClasses = () => {
    const baseClasses = CHAT_BUBBLE_CONTENT_BASE_CLASSES;
    const variantClasses = CHAT_BUBBLE_VARIANT_STYLES[variant];
    const senderClasses = isSender ? CHAT_BUBBLE_SENDER_STYLES[variant] : '';
    return combineClassNames(baseClasses, variantClasses, senderClasses);
  };

  return (
    <div className={combineClassNames(CHAT_BUBBLE_BASE_CLASSES, className)}>
      {avatar && (
        <img
          className={CHAT_BUBBLE_AVATAR_CLASSES}
          src={avatar.src}
          alt={avatar.alt}
        />
      )}
      <div className={getContentClasses()}>
        {(sender || timestamp) && (
          <ChatBubbleHeader>
            {sender && (
              <span className={CHAT_BUBBLE_SENDER_CLASSES}>{sender}</span>
            )}
            {timestamp && (
              <span className={CHAT_BUBBLE_TIMESTAMP_CLASSES}>{timestamp}</span>
            )}
          </ChatBubbleHeader>
        )}
        <ChatBubbleContent>{children}</ChatBubbleContent>
        {status && <ChatBubbleFooter>{status}</ChatBubbleFooter>}
      </div>
    </div>
  );
};

export default ChatBubble;
