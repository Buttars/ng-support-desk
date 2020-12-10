import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
} from '@nebular/theme';

import { SupportRoutingModule } from './support-routing.module';
import { ChipModule } from '../chip/chip.module';

import { SupportComponent } from './support/support.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketDialogComponent } from './create-ticket-dialog/create-ticket-dialog.component';
import { EditTicketDialogComponent } from './edit-ticket-dialog/edit-ticket-dialog.component';

@NgModule({
  declarations: [
    SupportComponent,
    TicketListComponent,
    TicketComponent,
    CreateTicketDialogComponent,
    EditTicketDialogComponent,
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
    NbSelectModule,
    NbIconModule,
    ChipModule,
  ],
})
export class SupportModule {}
