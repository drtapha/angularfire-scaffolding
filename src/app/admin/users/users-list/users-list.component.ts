import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { UserService } from '../../../services';


import { UsersFormsComponent } from '../users-forms/users-forms.component';

@Component({
  selector: 'sbm-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;
  constructor(private dialog : MdDialog, private userService : UserService) { }

  ngOnInit() {
   this.users = this.userService.list();
     
  }

  openDialog(){
    this.dialog.open(UsersFormsComponent, { width : "70%"}); 
  }

}
