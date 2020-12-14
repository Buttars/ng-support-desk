export interface Message {
  message: string;
}

export interface Ticket {
  id: string | number;
  title: string;
  description: string;
  status: 'active' | 'closed' | 'canceled';
  priority: 'low' | 'medium' | 'high' | 'highest';
}
