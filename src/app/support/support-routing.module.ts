import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTicketDialogComponent } from './create-ticket-dialog/create-ticket-dialog.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: '',
    component: SupportComponent,
  },
  {
    path: 'create-ticket',
    component: CreateTicketDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
