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
import { NotFoundComponent } from '@features/errors/pages/not-found/not-found.component';

// Routing
import { ErrorsRoutingModule } from '@features/errors/errors-routing.module';

@NgModule({
  declarations: [
    // Pages
    NotFoundComponent
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
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
