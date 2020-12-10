import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  tickets$ = this.selectAll();
  allSelected$: Observable<boolean> = this.selectAll().pipe(
    map((tickets) => {
      if (!tickets) {
        return false;
      }

      return tickets.every((ticket) => ticket.selected);
    })
  );
  someSelected$: Observable<boolean> = combineLatest([
    this.selectAll(),
    this.allSelected$,
  ]).pipe(
    map(([tickets, allSelected]) => {
      return (
        tickets?.filter((ticket) => ticket.selected === true).length > 0 &&
        !allSelected
      );
    })
  );

  constructor(protected store: TicketsStore) {
    super(store);
  }
}
