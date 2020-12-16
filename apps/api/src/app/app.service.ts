import { Injectable } from '@nestjs/common';
import {
  CreateTicketDto,
  Ticket,
  TicketPriority,
  TicketStatus,
} from '@ng-support-desk/api-interfaces';

@Injectable()
export class AppService {
  private _tickets: Array<Ticket> = [];

  private nextTicketId = 0;

  constructor() {
    this.initalizeTickets();
    this.initalizeNextTicketId();
  }

  initalizeTickets = () => {
    const tickets: Array<CreateTicketDto> = [
      {
        title: 'Ticket 0',
        description: 'Test123',
        status: 'active',
        priority: 'low',
      } as CreateTicketDto,
      {
        title: 'Ticket 1',
        description: 'Test123',
        priority: 'low',
        status: 'active',
      } as CreateTicketDto,
      {
        title: 'Ticket 2',
        description: 'Test123',
        priority: 'medium',
        status: 'canceled',
      } as CreateTicketDto,
      {
        title: 'Ticket 3',
        description: 'Test123',
        priority: 'high',
        status: 'closed',
      } as CreateTicketDto,
      {
        title: 'Ticket 4',
        description: 'Test123',
        priority: 'highest',
        status: 'canceled',
      } as CreateTicketDto,
    ];

    tickets.forEach((ticket) => {
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

  getTickets = (): Array<Ticket> => {
    return this._tickets;
  };

  getTicket = (id: string): Ticket => {
    return this._tickets.find((ticket) => (ticket.id = id));
  };

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
    const tickets = this._tickets.filter((ticket) => ticket.id !== id);
    this._tickets = tickets;

    return tickets;
  };

  deleteTickets = (ids: Array<string>) => {
    const tickets = this._tickets.filter((ticket) =>
      ids.includes(ticket.id as string)
    );
    this._tickets = tickets;

    return tickets;
  };
}
