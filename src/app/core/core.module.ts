import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// NGX Translate
import { TranslateModule } from '@ngx-translate/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Shared
import { SharedModule } from '@shared/shared.module';

// Services
import { LayoutService } from '@core/services/layout/layout.service';
import { MiniService } from '@core/services/mini/mini.service';
import { CreatorService } from '@core/services/creator/creator.service';
import { TagService } from '@core/services/tag/tag.service';
import { ThingiverseService } from '@core/services/thingiverse/thingiverse.service';

// Layouts
import { AuthLayoutComponent } from '@core/layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from "@core/layouts/app-layout/app-layout.component";
import { ErrorLayoutComponent } from '@core/layouts/error-layout/error-layout.component';

// Components
import { RouteLoaderComponent } from '@core/components/route-loader/route-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,

    // NGX Translate
    TranslateModule,

    // Font Awesome
    FontAwesomeModule,

    // Shared
    SharedModule
  ],
  entryComponents: [],
  declarations: [
    // Layouts
    AuthLayoutComponent,
    ErrorLayoutComponent,
    AppLayoutComponent,

    // Components
    RouteLoaderComponent
  ],
  exports: [
    // Layouts
    AuthLayoutComponent,
    ErrorLayoutComponent,
    AppLayoutComponent,

    // Components
    RouteLoaderComponent
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {

    return {
      ngModule: CoreModule,
      providers: [
        // Services
        LayoutService,
        MiniService,
        CreatorService,
        TagService,
        ThingiverseService
      ]
    };

  }
}
