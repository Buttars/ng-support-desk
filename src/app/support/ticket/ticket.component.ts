import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Ticket } from '../state';
import {
  TicketPrioriyToChipStatus,
  TicketPriority,
  TicketStatusToChipStatus,
  TicketStatus,
} from '../models';

@UntilDestroy()
@Component({
  selector: 'tk-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() selectedChange = new EventEmitter();

  checkboxControl = new FormControl();

  constructor() {
    this.ticket = {
      id: 'INC0',
      title: '',
      description: '',
      priority: TicketPriority.LOW,
      status: TicketStatus.ACTIVE,
      selected: false,
    };
  }

  ngOnInit(): void {
    this.checkboxControl.setValue(this.ticket.selected);

    this.checkboxControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((selected) => {
        this.selectedChange.emit({
          ...this.ticket,
          selected: selected,
        } as Ticket);
      });
  }

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
