import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createTicket, Ticket } from './ticket.model';
import { TicketsQuery } from './tickets.query';

export interface TicketsState extends EntityState<Ticket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'support',
})
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super();
  }
}
