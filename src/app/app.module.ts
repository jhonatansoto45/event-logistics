import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupModule } from './shared/popup/popup.module';


registerLocaleData(localeCo, 'es-CO');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,PopupModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
