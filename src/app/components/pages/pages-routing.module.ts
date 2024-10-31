import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from '../request/request.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: "ITSM-Dashboard"}
      },
      {
        path: 'request',
        component: RequestComponent,
        data: {title: "ITSM-Request"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
