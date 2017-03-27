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
    this.userService.register(this.user).then((user)=>{
      alert("Utilisateur ajouté avec succés"); 
      user.auth.updateProfile({displayName : "drtapha",photoURL:""}).then(data => console.log(data))
      .catch(error=> console.log(error));
    })
  }

}
