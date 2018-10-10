import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// MODULOS
import { PagesModule } from './pages/pages.module';
import { PanelModule } from './panel/panel.module';
import { FormsModule } from '@angular/forms';
//RUTAS
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    PagesModule,
    PanelModule
  ],
  imports:[
    CommonModule,
    APP_ROUTES,
    NgtUniversalModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
})
export class AppModule { }
