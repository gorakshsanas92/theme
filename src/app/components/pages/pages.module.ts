import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RequestDetailComponent } from './request-detail/request-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RequestDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgApexchartsModule
  ]
})
export class PagesModule { }
