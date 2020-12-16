import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { sortByOptions, TICKETS_SORT_BY } from '../models';
import { Ticket } from '../state/ticket.model';

@UntilDestroy()
@Component({
  selector: 'sd-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  @Input() tickets: Array<Ticket> | null;
  @Input() allSelected = false;
  @Input() someSelected = false;
  @Input() sortBy: TICKETS_SORT_BY;
  @Input() isLoading = true;
  @Output() createTicket = new EventEmitter();
  @Output() editTicket = new EventEmitter<Ticket>();
  @Output() setAll = new EventEmitter();
  @Output() ticketSelectChanged = new EventEmitter<Ticket>();
  @Output() deleteSelected = new EventEmitter();
  @Output() completeSelected = new EventEmitter();
  @Output() sortByUpdate = new EventEmitter();

  sortByOptions = sortByOptions;

  constructor() {
    this.tickets = [];
    this.sortBy = TICKETS_SORT_BY.NUMBER;
  }

  ngOnInit(): void {}

  createTicketClicked = () => {
    this.createTicket.emit();
  };

  selectChanged = (ticket: Ticket) => {
    this.ticketSelectChanged.emit(ticket);
  };
}
