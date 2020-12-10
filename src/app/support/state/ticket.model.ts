import { ID } from '@datorama/akita';
import { TicketPriority, TicketStatus } from '../models';

export interface Ticket {
  id: ID;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  selected: boolean;
}

export function createTicket({
  id,
  title,
  description,
  status = TicketStatus.ACTIVE,
  priority = TicketPriority.LOW,
}: Partial<Ticket>) {
  return {
    id: `INC${id?.toString().padStart(4, '0')}`,
    title,
    description,
    status,
    priority,
    selected: false,
  } as Ticket;
}
