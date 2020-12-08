import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { TicketPriority } from '../state/ticket-priority.enum';
import { TicketStatus } from '../state/ticket-status.enum';
import { Ticket } from '../state/ticket.model';

@Component({
  selector: 'tk-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  private _ticketPrioriyToChipStatus = {
    [TicketPriority.LOW]: 'primary',
    [TicketPriority.MEDIUM]: 'success',
    [TicketPriority.HIGH]: 'warning',
    [TicketPriority.HIGHEST]: 'danger',
  };

  private _ticketStatuToChipStatus = {
    [TicketStatus.ACTIVE]: 'primary',
    [TicketStatus.CANCELED]: 'warning',
    [TicketStatus.CLOSED]: 'danger',
  };

  constructor() {
    this.ticket = {
      id: 'INC0',
      title: '',
      description: '',
      priority: TicketPriority.LOW,
      status: TicketStatus.ACTIVE,
    };
  }

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

  get priorityChipStatus() {
    return this._ticketPrioriyToChipStatus[this.priority] as NbComponentStatus;
  }

  get statusChipStatus() {
    return this._ticketStatuToChipStatus[this.status] as NbComponentStatus;
  }
}
