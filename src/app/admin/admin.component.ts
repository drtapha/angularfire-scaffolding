import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sbm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user;
  constructor(public UserService : UserService, public navCtrl : Router) { }

  ngOnInit() {
     this.UserService.getCurrentUser().subscribe((user)=>{
        this.user = user; 
        console.log(user.displayName);
     })
  }

  logout(){
    this.UserService.logout().then(_=> this.navCtrl.navigate(['/login'])); 
  }

}
