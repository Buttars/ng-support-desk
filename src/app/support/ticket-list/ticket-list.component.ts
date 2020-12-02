import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createTicket, Ticket } from '../state/ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  @Input() tickets: Array<Ticket> | null;

  constructor() {
    this.tickets = [];
  }

  ngOnInit(): void {}
}
