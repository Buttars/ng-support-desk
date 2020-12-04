import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbListModule,
} from '@nebular/theme';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support/support.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketDialogComponent } from './create-ticket-dialog/create-ticket-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupportComponent,
    TicketListComponent,
    TicketComponent,
    CreateTicketDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupportRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbCheckboxModule,
    NbDialogModule.forChild({}),
  ],
})
export class SupportModule {}
