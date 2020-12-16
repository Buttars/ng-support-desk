import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  filter,
  map,
  mergeMap,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';

import { ID } from '@datorama/akita';

import { TicketPriority, TicketStatus, TICKETS_SORT_BY } from '../models';
import { createTicket, Ticket } from './ticket.model';
import { TicketsQuery } from './tickets.query';
import { TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private url = 'http://localhost:3333/api/tickets';

  constructor(
    private http: HttpClient,
    private ticketsStore: TicketsStore,
    private ticketsQuery: TicketsQuery
  ) {
    this.initialize();
  }

  initialize = () => {
    this.http
      .get(this.url)
      .pipe(take(1))
      .subscribe((tickets: Array<Ticket>) => {
        this.ticketsStore.set(tickets);
      });
  };

  createTicket = (ticket: Ticket) => {
    this.http
      .post(`${this.url}/create`, { ...ticket })
      .pipe(take(1))
      .subscribe((tickets: Array<Ticket>) => {
        const ids = tickets.map((_ticket) => _ticket.id);
        this.ticketsStore.upsert(ids, tickets);
      });
  };

  update = (ticket: Ticket) => {
    if (!ticket) {
      return;
    }

    this.http
      .post(`${this.url}/${ticket.id}`, {
        ...ticket,
      })
      .pipe(take(1))
      .subscribe((_ticket: Ticket) => {
        this.ticketsStore.update(_ticket.id, _ticket);
      });
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
    this.ticketsQuery.tickets$
      .pipe(
        take(1),
        map((tickets) => tickets.find((ticket) => ticket.id === id)),
        switchMap((ticket) => {
          return this.http.post(`${this.url}/${id}`, {
            ...ticket,
            status: TicketStatus.CLOSED,
          } as Ticket);
        })
      )
      .subscribe((ticket: Ticket) => {
        this.ticketsStore.update(ticket.id, ticket);
      });
  };

  deleteSelected = () => {
    this.ticketsQuery.tickets$
      .pipe(
        take(1),
        map((tickets) => tickets.filter((ticket) => ticket.selected)),
        map((tickets) => tickets.map((ticket) => ticket.id)),
        mergeMap((ids) => {
          return this.http.delete(this.url, {
            params: { ids: ids as Array<string> },
          });
        })
      )
      .subscribe((tickets: Array<Ticket>) => {
        this.ticketsStore.set(tickets);
      });
  };

  completeSelected = () => {
    this.ticketsQuery.tickets$.pipe(take(1)).subscribe((tickets) => {
      tickets.forEach(({ id, selected, status }) => {
        if (!selected || status === TicketStatus.CANCELED) {
          return;
        }

        this.complete(id);
      });
    });
  };

  sortBy = (sortBy: TICKETS_SORT_BY) => {
    this.ticketsStore.update({
      ui: {
        sortBy,
      },
    });
  };
}
