import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAXurPYNv85qhaMoeSV_PM99qTS8FAByng'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
