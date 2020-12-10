import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

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
    private router: Router
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
    this.allSelected$ = this.ticketsQuery.allSelected$;
    this.someSelected$ = this.ticketsQuery.someSelected$;
  }

  ngOnInit(): void {}

  createTicket = () => {
    this.router.navigateByUrl('/create-ticket');
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
