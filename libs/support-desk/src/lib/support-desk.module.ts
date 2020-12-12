import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbInputModule,
  NbCheckboxModule,
  NbDialogModule,
  NbSelectModule,
  NbIconModule,
} from '@nebular/theme';

import { ChipModule } from '@ng-support-desk/chip';

import { SupportDeskRoutingModule } from './support-desk-routing.module';

import { SupportComponent } from './support/support.component';
import { SortComponent } from './sort/sort.component';
import { EditTicketDialogComponent } from './edit-ticket-dialog/edit-ticket-dialog.component';
import { CreateTicketDialogComponent } from './create-ticket-dialog/create-ticket-dialog.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupportDeskRoutingModule,
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
  declarations: [
    SupportComponent,
    SortComponent,
    EditTicketDialogComponent,
    CreateTicketDialogComponent,
    TicketComponent,
    TicketListComponent,
  ],
})
export class SupportDeskModule {}
