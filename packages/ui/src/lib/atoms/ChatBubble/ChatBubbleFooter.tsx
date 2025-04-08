import { combineClassNames } from '../../../utils';
import type { ChatBubbleFooterProps } from './types';
import type { FC } from 'react';
import { CHAT_BUBBLE_STATUS_CLASSES } from './constants';

const ChatBubbleFooter: FC<ChatBubbleFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={combineClassNames(CHAT_BUBBLE_STATUS_CLASSES, className)}>
      {children}
    </div>
  );
};

export default ChatBubbleFooter;
