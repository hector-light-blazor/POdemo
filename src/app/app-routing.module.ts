import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoOrdersComponent } from './po-orders/po-orders.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
  },{  path: 'po-orders',
  component: PoOrdersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
