import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createTicket, Ticket } from '../state/ticket.model';

@Component({
  selector: 'tk-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  @Input() tickets: Array<Ticket> | null;
  @Output() createTicket = new EventEmitter();

  constructor() {
    this.tickets = [];
  }

  ngOnInit(): void {}

  createTicketClicked = () => {
    this.createTicket.emit();
  };
}
