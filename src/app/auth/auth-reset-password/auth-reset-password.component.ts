import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services';
import { Submit } from '../../entities';

@Component({
  selector: 'sbm-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent extends Submit implements OnInit {
  emailCtrl : FormControl;
  constructor(private auth : AuthService) { super(); }

  ngOnInit() {
    this.emailCtrl = new FormControl('', Validators.email); 
  }

  resetPassword(email){
      this.toggleSubmit();
      this.auth.resetPassword(email).then(_=> console.log("email enregistrer")); 
  }
}
