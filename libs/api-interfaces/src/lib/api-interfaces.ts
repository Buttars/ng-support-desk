export enum TicketStatus {
  ACTIVE = 'active',
  CLOSED = 'closed',
  CANCELED = 'canceled',
}

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  HIGHEST = 'highest',
}

export interface Ticket {
  id: string | number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
}

export interface CreateTicketDto {
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
}
