import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TICKETS_SORT_BY } from '../models';
import { Ticket } from './ticket.model';

export interface TicketsState extends EntityState<Ticket> {
  ui: {
    sortBy: TICKETS_SORT_BY;
  };
}

const initalState = {
  ui: { sortBy: TICKETS_SORT_BY.NUMBER },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'support',
})
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super(initalState);
  }
}
