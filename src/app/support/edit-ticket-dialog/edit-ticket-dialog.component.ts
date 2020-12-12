import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';

import {
  TicketPriority,
  TicketPriorityLabels,
  TicketStatus,
  TicketStatusLabels,
} from '../models';
import { Ticket } from '../state';

@Component({
  selector: 'app-edit-ticket-dialog',
  templateUrl: './edit-ticket-dialog.component.html',
  styleUrls: ['./edit-ticket-dialog.component.scss'],
})
export class EditTicketDialogComponent implements OnInit {
  @Input() ticket: Ticket;
  form = new FormGroup({});

  priorities = TicketPriorityLabels;
  statuses = TicketStatusLabels;

  constructor(
    private dialogRef: NbDialogRef<EditTicketDialogComponent>,
    private fb: FormBuilder
  ) {
    this.ticket = {
      id: 0,
      title: '',
      description: '',
      priority: TicketPriority.LOW,
      status: TicketStatus.ACTIVE,
      selected: false,
    };
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.title,
      description: this.description,
      status: this.status,
      priority: this.priority,
    });
  }

  save = () => {
    this.dialogRef.close({ ...this.ticket, ...this.form.value });
  };

  cancel = () => {
    this.dialogRef.close();
  };

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
