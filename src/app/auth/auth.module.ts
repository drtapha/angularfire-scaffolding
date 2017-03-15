import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetPasswordComponent } from './auth-reset-password/auth-reset-password.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule

  ],
  declarations: [
    AuthLoginComponent,
    AuthResetPasswordComponent,
    AuthRegisterComponent
  ]
})
export class AuthModule { }
