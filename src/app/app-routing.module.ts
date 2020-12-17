import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { AuthLayoutComponent } from '@core/layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from "@core/layouts/app-layout/app-layout.component";
import { ErrorLayoutComponent } from '@core/layouts/error-layout/error-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'minis',
    pathMatch: 'full'
  },
  {
    path: 'minis',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/minis/minis.module').then(m => m.MinisModule)
      }
    ]
  },
  {
    path: 'creators',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/creators/creators.module').then(m => m.CreatorsModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'error',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/errors/errors.module').then(m => m.ErrorsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
