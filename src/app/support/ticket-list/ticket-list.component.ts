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
  @Input() allSelected: boolean = false;
  @Input() someSelected: boolean = false;
  @Output() createTicket = new EventEmitter();
  @Output() editTicket = new EventEmitter<Ticket>();
  @Output() setAll = new EventEmitter();
  @Output() ticketSelectChanged = new EventEmitter<Ticket>();
  @Output() deleteSelected = new EventEmitter();
  @Output() completeSelected = new EventEmitter();

  constructor() {
    this.tickets = [];
  }

  ngOnInit(): void {}

  createTicketClicked = () => {
    this.createTicket.emit();
  };

  selectChanged = (ticket: Ticket) => {
    this.ticketSelectChanged.emit(ticket);
  };
}
