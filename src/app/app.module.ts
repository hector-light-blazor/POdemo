import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PoOrdersComponent } from './po-orders/po-orders.component';
import { PdescriptionComponent } from './po-orders/pdescription/pdescription.component';
import { Under1000Component } from './po-orders/under1000/under1000.component';
import { AttachmentsComponent } from './attachments/attachments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    PdescriptionComponent,
    PoOrdersComponent,
    Under1000Component,
    AttachmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
