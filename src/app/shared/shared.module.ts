import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// NGX Translate
import { TranslateModule } from '@ngx-translate/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { LogoComponent } from '@shared/components/logo/logo.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { PasswordStrengthMeterComponent } from '@shared/components/password-strength-meter/password-strength-meter.component';
import { EmptyStateComponent } from '@shared/components/empty-state/empty-state.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { TagsCardComponent } from './components/tags-card/tags-card.component';
import { MiniTagEditorComponent } from './components/mini-tag-editor/mini-tag-editor.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    // NGX Translate
    TranslateModule,

    // Font Awesome
    FontAwesomeModule,

  ],
  entryComponents: [],
  declarations: [
    // Components
    LogoComponent,
    FooterComponent,
    PasswordStrengthMeterComponent,
    EmptyStateComponent,
    SearchBarComponent,
    NavigationComponent,
    TopBarComponent,
    MiniCardComponent,
    TagsCardComponent,
    MiniTagEditorComponent
  ],
  exports: [
    // Components
    LogoComponent,
    FooterComponent,
    PasswordStrengthMeterComponent,
    EmptyStateComponent,
    SearchBarComponent,
    NavigationComponent,
    TopBarComponent,
    MiniCardComponent,
    TagsCardComponent,
    MiniTagEditorComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {

    return {
      ngModule: SharedModule,
      providers: []
    };

  }
}
