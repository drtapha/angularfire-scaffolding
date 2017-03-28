import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetPasswordComponent } from './auth-reset-password/auth-reset-password.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthProfilComponent } from './auth-profil/auth-profil.component';
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule

  ],
  declarations: [
    AuthLoginComponent,
    AuthResetPasswordComponent,
    AuthRegisterComponent,
    AuthProfilComponent
  ]
})
export class AuthModule { }
