import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { UserService } from '../../../services/user.service';

import { User } from '../../../entities/user';

@Component({
  selector: 'sbm-users-forms',
  templateUrl: './users-forms.component.html',
  styleUrls: ['./users-forms.component.css']
})
export class UsersFormsComponent implements OnInit {
  user : User = new User(); 
  constructor(
    public dialog : MdDialogRef<UsersFormsComponent>, 
    public userService : UserService
    ) { }

  ngOnInit() {
  }

  createOrUpdate(form){
    console.log(form); 
   /* this.userService.register(this.user).then(()=>{
      alert("Utilisateur ajouté avec succés"); 
    })*/
  }
}
