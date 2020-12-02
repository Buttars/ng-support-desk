import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  tickets$ = this.selectAll();

  constructor(protected store: TicketsStore) {
    super(store);
  }
}
