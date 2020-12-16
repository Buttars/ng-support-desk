import { CreateTicketDto } from '@ng-support-desk/api-interfaces';

export const tickets: Array<CreateTicketDto> = [
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
