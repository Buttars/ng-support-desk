import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';

import { createTicket, TicketsService } from '../state';

import {
  TicketStatus,
  TicketPriority,
  TicketStatusLabels,
  TicketPriorityLabels,
} from '../models';

@Component({
  selector: 'sd-create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.scss'],
})
export class CreateTicketDialogComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(TicketPriority.LOW),
    status: new FormControl(TicketStatus.ACTIVE),
  });

  priorities = TicketPriorityLabels;
  statuses = TicketStatusLabels;

  constructor(
    private ticketsService: TicketsService,
    private dialogRef: NbDialogRef<CreateTicketDialogComponent>
  ) {}

  ngOnInit(): void {}

  createTicket = () => {
    const ticket = {
      title: this.title?.value,
      description: this.description?.value,
      priority: this.priority?.value,
      status: this.status?.value,
    };

    this.ticketsService.createTicket(createTicket(ticket));
    this.dialogRef.close();
  };

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get priority() {
    return this.form.get('priority');
  }

  get status() {
    return this.form.get('status');
  }
}
