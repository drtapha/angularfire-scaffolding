import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthResetPasswordComponent } from './auth-reset-password/auth-reset-password.component';
import { AuthProfilComponent } from './auth-profil/auth-profil.component'

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent
  },
  {
    path: 'register',
    component: AuthRegisterComponent
  },
  {
    path: 'reset_password',
    component: AuthResetPasswordComponent
  },
  {
    path: 'profil',
    component: AuthProfilComponent

  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
