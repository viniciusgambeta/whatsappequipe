import React from 'react';
import { MessageType } from '../types/chat';
import { Check } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { isOutgoing, text, time, status, sender, image } = message;

  const getSenderColor = (sender?: string) => {
    if (!sender) return '';
    
    const colors: Record<string, string> = {
      'Digão': 'text-[#00BCD4]',
      'Joelma': 'text-[#FF5722]',
      'Rita': 'text-[#9C27B0]'
    };
    
    return colors[sender] || 'text-[#00BCD4]';
  };

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-lg p-2 max-w-[80%] shadow-sm relative ${
          isOutgoing ? 'bg-[#DCF8C6]' : 'bg-white'
        }`}
        style={{
          borderRadius: '7.5px',
        }}
      >
        {!isOutgoing && sender && (
          <div className={`text-sm font-medium ${getSenderColor(sender)}`}>
            {sender}
          </div>
        )}
        
        {text && <div className="text-sm text-gray-800">{text}</div>}
        
        {image && (
          <div className="mt-1">
            <img 
              src={image} 
              alt="Message attachment" 
              className="max-w-full rounded-md"
              style={{ maxHeight: '330px' }}
            />
          </div>
        )}
        
        <div className="flex items-center justify-end mt-1 space-x-1">
          <span className="text-[11px] text-gray-500">{time}</span>
          
          {isOutgoing && status === 'read' && (
            <div className="flex -mr-1">
              <Check size={14} className="text-[#53bdeb] -mr-1" />
              <Check size={14} className="text-[#53bdeb]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;