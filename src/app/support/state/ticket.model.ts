import { ID } from '@datorama/akita';

export interface Ticket {
  id: ID;
  title: string;
  description: string;
  status: string;
  priority: string;
}

export function createTicket({ title, description }: Partial<Ticket>) {
  return {
    id: `INC`,
    title,
    description,
    status: 'active',
    priority: 'low',
  } as Ticket;
}
