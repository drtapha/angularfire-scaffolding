import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { AddAlertDirective } from '../../shared/alert/ad-alert.directive';
import { AlertComponent } from '../../shared/alert/alert.component';

import { Credential } from '../../entities/user';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'sbm-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})

export class AuthLoginComponent implements OnInit {
  @ViewChild(AddAlertDirective) addAlert: AddAlertDirective;
  componentRef: ComponentRef<AlertComponent>;
  submitted: boolean = false;
  constructor(
    private userService: UserService,
    private resolver: ComponentFactoryResolver, 
    private navCtrl : Router
  ) { }

  ngOnInit() {
    console.log(this.submitted);
  }

  login(credentials: Credential) {
    this.submit();
    this.userService.login(credentials)
      .then(_=>this.navCtrl.navigate(['/admin']))
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
    this.submit();
  }
}
