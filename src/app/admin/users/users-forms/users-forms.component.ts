import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { UserService } from '../../../services';

import { User } from '../../../entities/user';

@Component({
  selector: 'sbm-users-forms',
  templateUrl: './users-forms.component.html',
  styleUrls: ['./users-forms.component.css']
})
export class UsersFormsComponent implements OnInit {
  constructor(
    private dialog : MdDialogRef<UsersFormsComponent>, 
    private userService : UserService

    ) { }
   
  ngOnInit() {
  }

  save(user){
      console.log(user);
      this.userService.save(user).then(_=> this.dialog.close());
  }
}
