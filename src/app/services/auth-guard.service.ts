import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isLoggedIn) { return Observable.of(true) }
        return this.auth.getCurrentUser().map(auth => {
            if (auth) {
                this.auth.isLoggedIn = true;
                return this.auth.isLoggedIn;
            }
            Observable.throw(false);
        }).catch(_ => this.navigateToLoginPage())
    }

    private navigateToLoginPage() {
        this.router.navigate(['/login']);
        return Observable.of(false);
    }

}