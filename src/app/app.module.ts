import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// NGX Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Font Awesome
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Core
import { CoreModule } from '@core/core.module';

// Shared
import { SharedModule } from '@shared/shared.module';

// Routing
import { AppRoutingModule } from '@app/app-routing.module';

// Components
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // NGX Translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),

    // Font Awesome
    FontAwesomeModule,

    // Core
    CoreModule.forRoot(),

    // Shared
    SharedModule.forRoot(),

    // Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    faIconLibrary: FaIconLibrary,
    faConfig: FaConfig
  ) {

    faIconLibrary.addIconPacks(fas, far, fab);
    faConfig.defaultPrefix = 'fas';
    faConfig.fixedWidth = true;

  }

}
