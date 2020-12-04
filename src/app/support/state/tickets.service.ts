import { Injectable } from '@angular/core';
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
      createTicket({ id: 0, title: 'a', description: 'Test123' }),
      createTicket({ id: 1, title: 'b', description: 'Test123' }),
      createTicket({ id: 2, title: 'c', description: 'Test123' }),
      createTicket({ id: 3, title: 'd', description: 'Test123' }),
      createTicket({ id: 4, title: 'e', description: 'Test123' }),
    ]);
  };

  createTicket = (ticket: Ticket) => {
    const id = this.ticketsQuery.getAll().length;
    this.ticketsStore.add({ ...ticket, id });
  };
}
