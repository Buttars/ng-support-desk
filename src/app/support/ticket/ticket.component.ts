import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../state/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() {}

  ngOnInit(): void {}

  get id() {
    return this.ticket.id;
  }

  get title() {
    return this.ticket.title;
  }

  get description() {
    return this.ticket.description;
  }

  get status() {
    return this.ticket.status;
  }

  get priority() {
    return this.ticket.priority;
  }
}
