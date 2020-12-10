import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { CreateTicketDialogComponent } from '../create-ticket-dialog/create-ticket-dialog.component';
import { EditTicketDialogComponent } from '../edit-ticket-dialog/edit-ticket-dialog.component';

import { Ticket } from '../state/ticket.model';
import { TicketsQuery } from '../state/tickets.query';
import { TicketsService } from '../state/tickets.service';

@Component({
  selector: 'tk-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  tickets$: Observable<Array<Ticket>>;
  allSelected$: Observable<boolean>;
  someSelected$: Observable<boolean>;

  constructor(
    private ticketsService: TicketsService,
    private ticketsQuery: TicketsQuery,
    private dialogService: NbDialogService
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
    this.allSelected$ = this.ticketsQuery.allSelected$;
    this.someSelected$ = this.ticketsQuery.someSelected$;
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
      .subscribe((ticket: Ticket | null) => {
        if (!ticket) {
          return;
        }

        this.ticketsService.update(ticket);
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
}
