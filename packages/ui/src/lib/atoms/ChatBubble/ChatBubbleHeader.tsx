import { combineClassNames } from '../../../utils';
import type { ChatBubbleHeaderProps } from './types';
import type { FC } from 'react';
import { CHAT_BUBBLE_HEADER_CLASSES } from './constants';

const ChatBubbleHeader: FC<ChatBubbleHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={combineClassNames(CHAT_BUBBLE_HEADER_CLASSES, className)}>
      {children}
    </div>
  );
};

export default ChatBubbleHeader;
