import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { createTicket, Ticket } from '../state/ticket.model';
import { TicketsQuery } from '../state/tickets.query';
import { TicketsService } from '../state/tickets.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  tickets$: Observable<Array<Ticket>>;

  constructor(
    private ticketsService: TicketsService,
    private ticketsQuery: TicketsQuery
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
  }

  ngOnInit(): void {}

  createTicket = () => {
    alert('Create Ticket');
  };
}
