import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Ticket } from './ticket.model';

export interface SupportState extends EntityState<Ticket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'support',
})
export class SupportStore extends EntityStore<SupportState> {
  constructor() {
    super();
  }
}
