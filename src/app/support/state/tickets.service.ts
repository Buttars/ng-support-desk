import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TicketPriority, TicketStatus } from '../models';
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
    this.ticketsQuery.tickets$
      .pipe(
        take(1),
        map((tickets) => tickets.length)
      )
      .subscribe((nextTicketNumber) => {
        this.ticketsStore.update({ nextTicketNumber });
      });
  };

  incrementNextTicketNumber = () => {
    this.ticketsQuery.nextTicketNumber$
      .pipe(take(1))
      .subscribe((nextTicketNumber) => {
        this.ticketsStore.update({ nextTicketNumber: nextTicketNumber + 1 });
      });
  };

  createTicket = (ticket: Ticket) => {
    this.ticketsQuery.nextTicketNumber$.pipe(take(1)).subscribe((id) => {
      this.ticketsStore.add(createTicket({ ...ticket, id }));
      this.incrementNextTicketNumber();
    });
  };

  update = (ticket: Ticket) => {
    if (!ticket) {
      return;
    }

    this.ticketsStore.update(ticket.id, ticket);
  };

  setAll = (selected: boolean) => {
    const tickets = this.ticketsQuery.getAll();
    tickets.forEach((ticket) => {
      this.ticketsStore.update(ticket.id, { selected });
    });
  };

  check = ({ id, selected }: Ticket) => {
    this.ticketsStore.update(id, { selected });
  };

  complete = (id: ID) => {
    this.ticketsStore.update(id, { status: TicketStatus.CLOSED });
  };

  deleteSelected = () => {
    const tickets = this.ticketsQuery.getAll();

    tickets.forEach(({ id, selected }) => {
      if (!selected) {
        return;
      }

      this.ticketsStore.remove(id);
    });
  };

  completeSelected = () => {
    const tickets = this.ticketsQuery.getAll();

    tickets.forEach(({ id, selected, status }) => {
      if (!selected) {
        return;
      }

      if (status === TicketStatus.CANCELED) {
        return;
      }

      this.complete(id);
    });
  };
}
