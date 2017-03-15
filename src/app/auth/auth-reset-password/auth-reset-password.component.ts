import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'sbm-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  resetPassword(email){
     
      this.userService.resetPassword(email).then(_=> console.log("email enregistrer")); 
  }
}
