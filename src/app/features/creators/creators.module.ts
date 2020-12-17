import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGX Translate
import { TranslateModule } from '@ngx-translate/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Core
import { CoreModule } from '@core/core.module';

// Shared
import { SharedModule } from '@shared/shared.module';

// Pages
import { CreatorsListComponent } from './pages/creators-list/creators-list.component';
import { CreatorDetailComponent } from './pages/creator-detail/creator-detail.component';

// Routing
import { CreatorsRoutingModule } from './creators-routing.module';

@NgModule({
  declarations: [
    // Pages
    CreatorsListComponent,
    CreatorDetailComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,

    // Core
    CoreModule,

    // Shared
    SharedModule,

    // Routing
    CreatorsRoutingModule
  ]
})
export class CreatorsModule { }
