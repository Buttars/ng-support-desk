export enum TICKETS_SORT_BY {
  NUMBER = 'number',
  PRIORITY_HIGH_TO_LOW = 'priority-high-to-low',
  PRIORITY_LOW_TO_HIGH = 'priority-low-to-high',
  STATUS = 'status',
}

export type TicketsSortBy = {
  label: string;
  value: TICKETS_SORT_BY;
};

export const sortByOptions: Array<TicketsSortBy> = [
  { label: 'Number', value: TICKETS_SORT_BY.NUMBER },
  {
    label: 'Priority High To Low',
    value: TICKETS_SORT_BY.PRIORITY_HIGH_TO_LOW,
  },
  {
    label: 'Priority Low to High',
    value: TICKETS_SORT_BY.PRIORITY_LOW_TO_HIGH,
  },
  { label: 'Status', value: TICKETS_SORT_BY.STATUS },
];
