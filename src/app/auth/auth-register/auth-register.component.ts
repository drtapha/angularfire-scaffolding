import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbm-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  done(event){
    console.log(event); 
  }
}
