import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as SupportModule from '@ng-support-desk/support-desk';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@ng-support-desk/support-desk').then((m) => m.SupportDeskModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
