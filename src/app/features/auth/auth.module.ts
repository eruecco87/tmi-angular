import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGX Translate
import { TranslateModule } from '@ngx-translate/core';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Shared
import { SharedModule } from '@shared/shared.module';

// Routing
import { AuthRoutingModule } from '@features/auth/auth-routing.module';

// Pages
import { LoginComponent } from '@features/auth/pages/login/login.component';
import { ForgotPasswordComponent } from '@features/auth/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '@features/auth/pages/register/register.component';

@NgModule({
  declarations: [
    // Pages
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FontAwesomeModule,

    // Shared
    SharedModule,

    // Routing
    AuthRoutingModule
  ]
})
export class AuthModule { }
