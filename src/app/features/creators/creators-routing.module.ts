import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Models
import { RouteConfiguration, PageData } from '@core/services/layout/models';

// Components
import { CreatorsListComponent } from '@features/creators/pages/creators-list/creators-list.component';
import { CreatorDetailComponent } from '@features/creators/pages/creator-detail/creator-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorsListComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'creatorsListPage.pageTitle'
      })
    })
  },
  {
    path: ':id',
    component: CreatorDetailComponent,
    data: new RouteConfiguration({
      pageData: new PageData({
        title: 'creatorDetailPage.pageTitle'
      })
    })
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
