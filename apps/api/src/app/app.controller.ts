import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Message, Ticket } from '@ng-support-desk/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tickets')
  getTickets(): Array<Ticket> {
    return this.appService.getTickets();
  }

  @Post('tickets/create')
  createTicket(@Body() ticket: Ticket): Ticket {
    return this.appService.createTicket(ticket);
  }

  @Get('tickets/:id')
  getTicket(@Param() { id }): Ticket {
    return this.appService.getTicket(id);
  }

  @Post('tickets/:id')
  updateTicket(@Body() ticket: Ticket): Ticket {
    return this.appService.updateTicket(ticket);
  }
}
