import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { TicketPriority, TicketStatus, TICKETS_SORT_BY } from '../models';
import { Ticket } from './ticket.model';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  sortBy$ = this.select((state) => state.ui.sortBy);

  tickets$ = combineLatest([this.sortBy$, this.selectAll()]).pipe(
    map(([sortBy, tickets]) => this.sortTicketsBy(sortBy, tickets))
  );

  allSelected$: Observable<boolean> = this.selectAll().pipe(
    map((tickets) => {
      if (!tickets || tickets.length === 0) {
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

  nextTicketNumber$ = this.select((state) => state.nextTicketNumber);

  constructor(protected store: TicketsStore) {
    super(store);
  }

  private sortByNumber = (a: Ticket, b: Ticket) => {
    let idA = a.id as string;
    let idB = b.id as string;

    idA = idA.slice(idA.length - 3, idA.length);
    idB = idB.slice(idB.length - 3, idB.length);

    if (idA > idB) {
      return 1;
    } else if (idA < idB) {
      return -1;
    } else {
      return 0;
    }
  };

  private sortByPriority = (
    a: Ticket,
    b: Ticket,
    priorityOrder: Array<TicketPriority>
  ) => {
    const priorityIndexA = priorityOrder.indexOf(a.priority);
    const priorityIndexB = priorityOrder.indexOf(b.priority);

    if (priorityIndexA > priorityIndexB) {
      return 1;
    } else if (priorityIndexA < priorityIndexB) {
      return -1;
    } else {
      return 0;
    }
  };

  private sortByPriorityHighToLow = (a: Ticket, b: Ticket) =>
    this.sortByPriority(a, b, [
      TicketPriority.HIGHEST,
      TicketPriority.HIGH,
      TicketPriority.MEDIUM,
      TicketPriority.LOW,
    ]);

  private sortByPriorityLowToHigh = (a: Ticket, b: Ticket) =>
    this.sortByPriority(a, b, [
      TicketPriority.LOW,
      TicketPriority.MEDIUM,
      TicketPriority.HIGH,
      TicketPriority.HIGHEST,
    ]);

  private sortByStatus = (a: Ticket, b: Ticket) => {
    const statusOrder = [
      TicketStatus.ACTIVE,
      TicketStatus.CANCELED,
      TicketStatus.CLOSED,
    ];

    const statusIndexA = statusOrder.indexOf(a.status);
    const statusIndexB = statusOrder.indexOf(b.status);

    if (statusIndexA > statusIndexB) {
      return 1;
    } else if (statusIndexA < statusIndexB) {
      return -1;
    } else {
      return 0;
    }
  };

  private sortTicketsBy = (
    sortBy: TICKETS_SORT_BY,
    tickets: Array<Ticket>
  ): Array<Ticket> => {
    switch (sortBy) {
      case TICKETS_SORT_BY.NUMBER:
        return tickets.sort(this.sortByNumber);
      case TICKETS_SORT_BY.PRIORITY_HIGH_TO_LOW:
        return tickets.sort(this.sortByPriorityHighToLow);
      case TICKETS_SORT_BY.PRIORITY_LOW_TO_HIGH:
        return tickets.sort(this.sortByPriorityLowToHigh);
      case TICKETS_SORT_BY.STATUS:
        return tickets.sort(this.sortByStatus);
      default:
        return tickets;
    }
  };
}
