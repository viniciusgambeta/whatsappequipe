import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import { MessageType } from '../types/chat';

const WhatsAppChat: React.FC = () => {
  const messages: MessageType[] = [
    {
      id: 1,
      text: "Gente, vocês viram?!?!",
      time: "08:42 am",
      isOutgoing: true,
      status: "read"
    },
    {
      id: 2,
      text: "[Fulano] confirmou presença no aulão do dia 10!!!😍😍😍",
      time: "08:42 am",
      isOutgoing: true,
      status: "read"
    },
    {
      id: 3,
      sender: "Digão",
      text: "Mds, sério?!",
      time: "08:44 am",
      isOutgoing: false
    },
    {
      id: 4,
      sender: "Joelma",
      text: "Só acredito vendo",
      time: "08:45 am",
      isOutgoing: false
    },
    {
      id: 5,
      sender: "Rita",
      image: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      time: "08:47 am",
      isOutgoing: false
    }
  ];

  return (
    <div className="w-full max-w-md h-[600px] overflow-hidden flex flex-col rounded-md shadow-lg">
      <ChatHeader 
        title="Equipe d Bolso" 
        subtitle="5 Online" 
        showBackButton={true}
        showVideoCall={true}
        showVoiceCall={true}
      />
      <ChatBody messages={messages} />
    </div>
  );
};

export default WhatsAppChat;