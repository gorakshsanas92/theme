import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {title: "ITSM-Login"}
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {title: "ITSM-Forgot Password"}
  },
  {
    path: "",
    loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {title: "ITSM-Page Not Found"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
