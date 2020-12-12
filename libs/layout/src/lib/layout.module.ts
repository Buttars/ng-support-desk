import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule } from '@nebular/theme';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, NbLayoutModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
