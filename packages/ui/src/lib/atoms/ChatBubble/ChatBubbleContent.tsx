import { combineClassNames } from '../../../utils';
import type { ChatBubbleContentProps } from './types';
import type { FC } from 'react';
import { CHAT_BUBBLE_MESSAGE_CLASSES } from './constants';

const ChatBubbleContent: FC<ChatBubbleContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={combineClassNames(CHAT_BUBBLE_MESSAGE_CLASSES, className)}>
      {children}
    </div>
  );
};

export default ChatBubbleContent;
