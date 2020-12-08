import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {
  createTicket,
  TicketsService,
  TicketStatus,
  TicketPriority,
  TicketStatusLabels,
  TicketPriorityLabels,
} from '../state';

@Component({
  selector: 'tk-create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.scss'],
})
export class CreateTicketDialogComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
  });

  priorities = TicketPriorityLabels;
  statuses = TicketStatusLabels;

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {}

  createTicket = () => {
    const ticket = {
      title: this.title?.value,
      description: this.description?.value,
      priority: this.priority?.value,
      status: this.status?.value,
    };

    this.ticketsService.createTicket(createTicket(ticket));
    this.router.navigateByUrl('/');
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
