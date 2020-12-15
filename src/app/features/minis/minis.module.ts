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
import { MinisListComponent } from '@features/minis/pages/minis-list/minis-list.component';
import { MiniDetailComponent } from '@features/minis/pages/mini-detail/mini-detail.component';

// Routing
import { MinisRoutingModule } from '@features/minis/minis-routing.module';

@NgModule({
  declarations: [
    // Pages
    MinisListComponent,
    MiniDetailComponent
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
    MinisRoutingModule
  ]
})
export class MinisModule { }
