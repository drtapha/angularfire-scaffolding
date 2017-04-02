import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { auth, storage } from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User, Credential } from '../entities/user';
import { CrudService } from './crud.service';

@Injectable()
export class UserService extends CrudService<any> {
  constructor(private af: AngularFire) {
    super(af);
    this.url = "/users";
  }

  save(user) {
    let url = `${this.url}/${user.uid}`; 
    return this.set(url,{email : user.email});
  }

}
