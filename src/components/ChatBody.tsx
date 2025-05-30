import React from 'react';
import Message from './Message';
import { MessageType } from '../types/chat';

interface ChatBodyProps {
  messages: MessageType[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  return (
    <div 
      className="flex-1 bg-[#E5DDD5] bg-opacity-90 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat overflow-y-auto p-3"
      style={{ backgroundSize: '210px auto' }}
    >
      <div className="space-y-1">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatBody;