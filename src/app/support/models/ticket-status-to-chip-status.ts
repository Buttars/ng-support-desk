import { TicketStatus } from './ticket-status.enum';

export const TicketStatusToChipStatus = {
  [TicketStatus.ACTIVE]: 'primary',
  [TicketStatus.CANCELED]: 'warning',
  [TicketStatus.CLOSED]: 'danger',
};

export const TicketStatusLabels = [
  { label: 'Active', value: TicketStatus.ACTIVE },
  { label: 'Canceled', value: TicketStatus.CANCELED },
  { label: 'Closed', value: TicketStatus.CLOSED },
];
