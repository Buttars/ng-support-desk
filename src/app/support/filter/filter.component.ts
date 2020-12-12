import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TicketsSortBy, TICKETS_SORT_BY } from '../models';

@Component({
  selector: 'tk-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() active: TICKETS_SORT_BY;
  @Input() sortByOptions: Array<TicketsSortBy>;
  @Output() update = new EventEmitter<TicketsSortBy>();

  control = new FormControl();

  constructor() {
    this.active = TICKETS_SORT_BY.NUMBER;
    this.sortByOptions = [];
  }

  ngOnInit(): void {
    this.control.setValue(this.active);
    this.control.valueChanges.subscribe((sortBy) => this.update.emit(sortBy));
  }
}
