import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../entities/user';

@Component({
  selector: 'sbm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User(); 
  constructor( 
    public userService : UserService
    ) { }

  ngOnInit() {
  }

  createOrUpdate(){
    this.userService.register(this.user).then(()=>{
      alert("Utilisateur ajouté avec succés"); 
    })
  }

}