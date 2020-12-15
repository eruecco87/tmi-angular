import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Models
import { RouteConfiguration, PageData } from '@core/services/layout/models';

// Components
import { MinisListComponent } from "@features/minis/pages/minis-list/minis-list.component";
import { MiniDetailComponent } from '@features/minis/pages/mini-detail/mini-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MinisListComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'minisListPage.pageTitle'
      })
    })
  },
  {
    path: ':id',
    component: MiniDetailComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'miniDetailPage.pageTitle'
      })
    })
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinisRoutingModule { }
