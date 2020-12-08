import { Injectable } from '@angular/core';
import { TicketPriority } from './ticket-priority.enum';
import { TicketStatus } from './ticket-status.enum';
import { createTicket, Ticket } from './ticket.model';
import { TicketsQuery } from './tickets.query';
import { TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(
    private ticketsStore: TicketsStore,
    private ticketsQuery: TicketsQuery
  ) {
    this.initialize();
  }

  initialize = () => {
    this.ticketsStore.set([
      createTicket({
        id: 0,
        title: 'Ticket 0',
        description: 'Test123',
      }),

      createTicket({
        id: 1,
        title: 'Ticket 1',
        description: 'Test123',
        priority: TicketPriority.LOW,
        status: TicketStatus.ACTIVE,
      }),
      createTicket({
        id: 2,
        title: 'Ticket 2',
        description: 'Test123',
        priority: TicketPriority.MEDIUM,
        status: TicketStatus.CANCELED,
      }),
      createTicket({
        id: 3,
        title: 'Ticket 3',
        description: 'Test123',
        priority: TicketPriority.HIGH,
        status: TicketStatus.CLOSED,
      }),
      createTicket({
        id: 4,
        title: 'Ticket 4',
        description: 'Test123',
        priority: TicketPriority.HIGHEST,
        status: TicketStatus.CANCELED,
      }),
    ]);
  };

  createTicket = (ticket: Ticket) => {
    const id = this.ticketsQuery.getAll().length;
    this.ticketsStore.add({ ...ticket, id });
  };
}
