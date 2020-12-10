import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  tickets$ = this.selectAll();
  allComplete$: Observable<boolean> = this.selectAll().pipe(
    map((tickets) => {
      if (!tickets) {
        return false;
      }

      return tickets.every((ticket) => ticket.selected);
    })
  );
  someComplete$: Observable<boolean> = combineLatest([
    this.selectAll(),
    this.allComplete$,
  ]).pipe(
    map(([tickets, allComplete]) => {
      return (
        tickets?.filter((ticket) => ticket.selected === true).length > 0 &&
        !allComplete
      );
    })
  );

  constructor(protected store: TicketsStore) {
    super(store);
  }
}
