import { TicketPriority } from './ticket-priority.enum';

export const TicketPrioriyToChipStatus = {
  [TicketPriority.LOW]: 'primary',
  [TicketPriority.MEDIUM]: 'success',
  [TicketPriority.HIGH]: 'warning',
  [TicketPriority.HIGHEST]: 'danger',
};

export const TicketPriorityLabels = [
  { label: 'Low', value: TicketPriority.LOW },
  { label: 'Medium', value: TicketPriority.MEDIUM },
  { label: 'High', value: TicketPriority.HIGH },
  { label: 'Highest', value: TicketPriority.HIGHEST },
];
