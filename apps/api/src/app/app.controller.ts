import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CreateTicketDto, Ticket } from '@ng-support-desk/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tickets')
  getTickets(): Array<Ticket> {
    return this.appService.getTickets();
  }

  @Post('tickets/create')
  createTicket(@Body() createTicketDto: CreateTicketDto): Array<Ticket> {
    return this.appService.createTicket(createTicketDto);
  }

  @Delete('tickets')
  deleteTickets(@Query() { ids }) {
    return this.appService.deleteTickets(ids);
  }

  @Get('tickets/:id')
  getTicket(@Param() { id }): Ticket {
    return this.appService.getTicket(id);
  }

  @Post('tickets/:id')
  updateTicket(@Body() ticket: Ticket): Ticket {
    return this.appService.updateTicket(ticket);
  }

  @Delete('tickets/:id')
  deleteTicket(@Param() { id }) {
    return this.appService.deleteTicket(id);
  }
}
