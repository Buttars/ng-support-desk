import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createTicket, Ticket } from '../state/ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets$: Observable<Array<Ticket>> = of([
    createTicket({ title: 'a', description: 'Test123' }),
    createTicket({ title: 'b', description: 'Test123' }),
    createTicket({ title: 'c', description: 'Test123' }),
    createTicket({ title: 'd', description: 'Test123' }),
    createTicket({ title: 'e', description: 'Test123' }),
  ]);

  constructor() {}

  ngOnInit(): void {}
}
