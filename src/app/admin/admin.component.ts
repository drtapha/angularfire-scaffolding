import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'sbm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user;
  constructor(public authService : AuthService, public navCtrl : Router) { }

  ngOnInit() {
     this.authService.getCurrentUser().subscribe((user)=>{
        this.user = user; 
     })
  }

  logout(){
    this.authService.logout().then(_=> this.navCtrl.navigate(['/login'])); 
  }

}
