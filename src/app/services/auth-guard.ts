import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isLoggedIn) { return Observable.of(true) }

        return this.userService.getCurrentUser().map(auth => {
            if (auth) {
                this.userService.isLoggedIn = true;
                return this.userService.isLoggedIn;
            }
            Observable.throw(false); 
        }).catch(_=> this.navigateToLoginPage())
    }

    private navigateToLoginPage(){
         this.router.navigate(['/login']);
        return Observable.of(false);
    }

}