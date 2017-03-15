import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';



import { UsersFormsComponent } from '../users-forms/users-forms.component';

@Component({
  selector: 'sbm-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  constructor(public dialog : MdDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(UsersFormsComponent, { width : "70%"}); 
  }

}
