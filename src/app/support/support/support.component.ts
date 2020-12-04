import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { NbDialogService } from '@nebular/theme';

import { CreateTicketDialogComponent } from '../create-ticket-dialog/create-ticket-dialog.component';

import { createTicket, Ticket } from '../state/ticket.model';
import { TicketsQuery } from '../state/tickets.query';
import { TicketsService } from '../state/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  tickets$: Observable<Array<Ticket>>;

  constructor(
    private ticketsService: TicketsService,
    private ticketsQuery: TicketsQuery,
    private router: Router
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
  }

  ngOnInit(): void {}

  createTicket = () => {
    this.router.navigateByUrl('/create-ticket');
    // this.ticketsService.createTicket(
    //   createTicket({ title: 'test', description: '123' })
    // );
  };
}
