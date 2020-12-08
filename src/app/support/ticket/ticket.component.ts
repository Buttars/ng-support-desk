import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { TicketPrioriyToChipStatus } from '../state/ticket-priority-to-chip-status';
import { TicketPriority } from '../state/ticket-priority.enum';
import { TicketStatusToChipStatus } from '../state/ticket-status-to-chip-status';
import { TicketStatus } from '../state/ticket-status.enum';
import { Ticket } from '../state/ticket.model';

@Component({
  selector: 'tk-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

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
    return TicketPrioriyToChipStatus[this.priority] as NbComponentStatus;
  }

  get statusChipStatus() {
    return TicketStatusToChipStatus[this.status] as NbComponentStatus;
  }
}
