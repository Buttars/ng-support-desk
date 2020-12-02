import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbCheckboxModule, NbListModule } from '@nebular/theme';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support/support.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [SupportComponent, TicketListComponent, TicketComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    NbCardModule,
    NbListModule,
    NbCheckboxModule,
  ],
})
export class SupportModule {}
