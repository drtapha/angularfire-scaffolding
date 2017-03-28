import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAlertDirective } from '../../shared/alert/ad-alert.directive';
import { AlertComponent } from '../../shared/alert/alert.component';

import { Submit, Credential } from '../../entities';

import { AuthService } from '../../services';

@Component({
  selector: 'sbm-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})

export class AuthLoginComponent extends Submit implements OnInit {
  @ViewChild(AddAlertDirective) addAlert: AddAlertDirective;
  componentRef: ComponentRef<AlertComponent>;
  credentials: Credential = { email: '', password: '' };
  constructor(
    private auth: AuthService,
    private resolver: ComponentFactoryResolver,
    private navCtrl: Router
  ) { super(); }

  ngOnInit() {
    this.emailCtrl = new FormControl('', Validators.email);
  }

  login() {
    this.toggleSubmit();
    this.auth.login(this.credentials)
      .then(_ => {
        this.navCtrl.navigate(['/admin']);
      })
      .catch(this.loginError);
  }

  showAlert(message: string) {
    let componentFactory = this.resolver.resolveComponentFactory(AlertComponent);
    let container = this.addAlert.viewContainerRef;
    container.clear();
    this.componentRef = container.createComponent(componentFactory);
    let instance = this.componentRef.instance;
    instance.message = message;
    this.closeAlert();
  }

  closeAlert() {
    this.componentRef.instance.closed.subscribe(_ => this.componentRef.destroy());
  }

  private submit() {
    this.submitted = !this.submitted;
  }

  loginError = (error) => {
    console.log(error);
    this.showAlert("Email ou mot de pass incorrect !!!");
    this.toggleSubmit();
  }
}
