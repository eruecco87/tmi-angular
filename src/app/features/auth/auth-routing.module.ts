import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Models
import { RouteConfiguration, PageData } from '@core/services/layout/models';

// Components
import { RegisterComponent } from '@features/auth/pages/register/register.component';
import { LoginComponent } from '@features/auth/pages/login/login.component';
import { ForgotPasswordComponent } from '@features/auth/pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'registerPage.pageTitle'
      })
    })
  },
  {
    path: 'login',
    component: LoginComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'loginPage.pageTitle'
      })
    })
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'forgotPasswordPage.pageTitle'
      })
    })
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
