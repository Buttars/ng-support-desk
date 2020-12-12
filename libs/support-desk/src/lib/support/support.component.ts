import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { NbDialogService } from '@nebular/theme';

import { UntilDestroy } from '@ngneat/until-destroy';

import { TICKETS_SORT_BY } from '../models';
import { Ticket, TicketsQuery, TicketsService } from '../state';

import { CreateTicketDialogComponent } from '../create-ticket-dialog/create-ticket-dialog.component';
import { EditTicketDialogComponent } from '../edit-ticket-dialog/edit-ticket-dialog.component';

@UntilDestroy()
@Component({
  selector: 'tk-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  tickets$: Observable<Array<Ticket>>;
  allSelected$: Observable<boolean>;
  someSelected$: Observable<boolean>;
  sortBy$: Observable<TICKETS_SORT_BY>;

  constructor(
    private ticketsService: TicketsService,
    private ticketsQuery: TicketsQuery,
    private dialogService: NbDialogService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
    this.allSelected$ = this.ticketsQuery.allSelected$;
    this.someSelected$ = this.ticketsQuery.someSelected$;
    this.sortBy$ = this.ticketsQuery.sortBy$;

    const isSmall$ = breakpointObserver
      .observe([Breakpoints.Small])
      .pipe(map((res) => res.matches));
  }

  ngOnInit(): void {}

  createTicket = () => {
    this.dialogService.open(CreateTicketDialogComponent, {
      hasBackdrop: true,
      autoFocus: true,
      closeOnBackdropClick: true,
    });
  };

  editTicket = (ticket: Ticket) => {
    this.dialogService
      .open(EditTicketDialogComponent, {
        hasBackdrop: true,
        autoFocus: true,
        closeOnBackdropClick: true,
        context: {
          ticket,
        },
      })
      .onClose.pipe(take(1))
      .subscribe((t: Ticket | null) => {
        if (!t) {
          return;
        }

        this.ticketsService.update(t);
      });
  };

  setAll = (completed: boolean) => {
    this.ticketsService.setAll(completed);
  };

  ticketSelectedChanged = (ticket: Ticket) => {
    this.ticketsService.check(ticket);
  };

  deleteSelected = () => {
    this.ticketsService.deleteSelected();
  };

  completeSelected = () => {
    this.ticketsService.completeSelected();
  };

  sortBy = (sortBy: TICKETS_SORT_BY) => {
    this.ticketsService.sortBy(sortBy);
  };
}
