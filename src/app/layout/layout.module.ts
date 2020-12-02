import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule } from '@nebular/theme';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NbLayoutModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
