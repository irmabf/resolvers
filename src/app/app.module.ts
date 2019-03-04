import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { routing } from './routing/app.routing';
import { HttpClientModule } from '@angular/common/http';


import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DataResolver } from 'src/resolvers/data.resolver';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    MatProgressBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
  ],
  providers: [DataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
