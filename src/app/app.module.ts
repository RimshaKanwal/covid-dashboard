import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import {ComponentsModule} from './components/components.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
   declarations: [
    AppComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
