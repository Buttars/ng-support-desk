import { ID } from '@datorama/akita';
import { TicketPriority } from './ticket-priority.enum';
import { TicketStatus } from './ticket-status.enum';

export interface Ticket {
  id: ID;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
}

export function createTicket({
  id,
  title,
  description,
  status = TicketStatus.ACTIVE,
  priority = TicketPriority.LOW,
}: Partial<Ticket>) {
  return {
    id,
    title,
    description,
    status,
    priority,
  } as Ticket;
}
