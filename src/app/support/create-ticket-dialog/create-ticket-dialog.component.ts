import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { createTicket } from '../state/ticket.model';
import { TicketsService } from '../state/tickets.service';

@Component({
  selector: 'tk-create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.scss'],
})
export class CreateTicketDialogComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {}

  createTicket = () => {
    const ticket = {
      title: this.title?.value,
      description: this.description?.value,
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
}
