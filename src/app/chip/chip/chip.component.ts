import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'tk-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input()
  get status(): NbComponentStatus {
    return this._status;
  }
  set status(value: NbComponentStatus) {
    if ((value as string) === '') {
      this._status = 'basic';
    } else {
      this._status = value;
    }
  }
  protected _status: NbComponentStatus = 'basic';

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.status-control')
  get control() {
    return this.status === 'control';
  }
}
