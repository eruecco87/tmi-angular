import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Models
import { RouteConfiguration, PageData } from '@core/services/layout/models';

// Components
import { NotFoundComponent } from '@features/errors/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '404',
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'notFoundPage.pageTitle'
      })
    })
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
