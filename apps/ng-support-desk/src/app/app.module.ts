import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { NbDialogModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { LayoutModule } from '@ng-support-desk/layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    NbThemeModule.forRoot(),
    NbDialogModule.forRoot({}),
    NbDialogModule.forRoot({}),
    NbEvaIconsModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
