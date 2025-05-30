import React from 'react';
import { ChevronLeft, Phone, Video } from 'lucide-react';

interface ChatHeaderProps {
  title: string;
  subtitle: string;
  showBackButton: boolean;
  showVideoCall: boolean;
  showVoiceCall: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  title, 
  subtitle, 
  showBackButton, 
  showVideoCall, 
  showVoiceCall 
}) => {
  return (
    <div className="bg-[#008069] text-white p-2 flex items-center">
      <div className="flex items-center flex-1">
        {showBackButton && (
          <div className="flex items-center mr-2">
            <ChevronLeft size={24} />
            <span className="text-xl ml-1">117</span>
          </div>
        )}
        <div className="ml-2 flex-shrink-0">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="ml-3 flex-1">
          <div className="text-white font-medium">{title}</div>
          <div className="text-[13px] text-gray-100">{subtitle}</div>
        </div>
      </div>
      <div className="flex space-x-4">
        {showVideoCall && <Video size={22} className="text-white" />}
        {showVoiceCall && <Phone size={22} className="text-white" />}
      </div>
    </div>
  );
};

export default ChatHeader;