export interface MessageType {
  id: number;
  text?: string;
  image?: string;
  time: string;
  isOutgoing: boolean;
  status?: 'sent' | 'delivered' | 'read';
  sender?: string;
}