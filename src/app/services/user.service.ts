import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { auth, storage } from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User, Credential } from '../entities/user';

@Injectable()
export class UserService {
  constructor(){}

}
