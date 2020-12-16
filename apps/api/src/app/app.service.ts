import { Injectable } from '@nestjs/common';
import {
  CreateTicketDto,
  Ticket,
  TicketPriority,
  TicketStatus,
} from '@ng-support-desk/api-interfaces';
import { tickets as mockTickets } from './tickets.mock';

@Injectable()
export class AppService {
  private _tickets: Array<Ticket> = [];

  private nextTicketId = 0;

  constructor() {
    this.initalizeTickets();
    this.initalizeNextTicketId();
  }

  initalizeTickets = () => {
    mockTickets.forEach((ticket) => {
      this.createTicket(ticket);
    });
  };

  initalizeNextTicketId = () => {
    const lastTicket = this._tickets[this._tickets.length - 1];

    if (!lastTicket) {
      return;
    }

    const lastTicketId: string = lastTicket.id.toString();

    this.nextTicketId = Number.parseInt(
      lastTicketId.slice(lastTicketId.length - 4, lastTicketId.length)
    );
  };

  getTickets = (): Array<Ticket> => this._tickets;

  getTicket = (id: string): Ticket =>
    this._tickets.find((ticket) => (ticket.id = id));

  createTicket = ({
    title,
    description,
    priority = TicketPriority.LOW,
    status = TicketStatus.ACTIVE,
  }: CreateTicketDto): Array<Ticket> => {
    const id = `INC${this.nextTicketId.toString().padStart(4, '0')}`;
    this.nextTicketId = this.nextTicketId + 1;

    const ticket = { id, title, description, priority, status } as Ticket;
    this._tickets.push(ticket);

    return this._tickets;
  };

  updateTicket = (ticket: Ticket): Ticket => {
    const tickets = this.getTickets();
    const index = tickets.indexOf(
      tickets.find((_ticket) => _ticket.id === ticket.id)
    );

    if (index < 0) {
      return;
    }

    tickets[index] = ticket;
    this._tickets = tickets;

    return ticket;
  };

  deleteTicket = (id: string) => {
    this._tickets = this._tickets.filter((ticket) => ticket.id !== id);
    return this._tickets;
  };

  deleteTickets = (ids: Array<string>) => {
    this._tickets = this._tickets.filter((ticket) => {
      return !ids.includes(ticket.id as string);
    });

    return this._tickets;
  };
}
