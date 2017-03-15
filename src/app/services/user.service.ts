import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { auth } from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User, Credential } from '../entities/user';

@Injectable()
export class UserService {

  constructor(private af: AngularFire) { }

  register(user: User) {
    return this.af.auth.createUser({
      email: user.email,
      password: user.password
    })
  }

  login(credentials: Credential) {
    return this.af.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  resetPassword(email : string){
    return auth().sendPasswordResetEmail(email);
  }

  logout() {
    return this.af.auth.logout();
  }
  getCurrentUser() {
    return this.af.auth.map(user => {
      if (user) return user.auth;
    });
  }

}