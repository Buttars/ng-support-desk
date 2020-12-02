import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createTicket, Ticket } from './ticket.model';

export interface TicketsState extends EntityState<Ticket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'support',
})
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super();
    this.set([
      createTicket({ title: 'a', description: 'Test123' }),
      createTicket({ title: 'b', description: 'Test123' }),
      createTicket({ title: 'c', description: 'Test123' }),
      createTicket({ title: 'd', description: 'Test123' }),
      createTicket({ title: 'e', description: 'Test123' }),
    ]);
  }
}
