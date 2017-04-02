import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { InterventionsFormsComponent } from '../interventions-forms/interventions-forms.component';

@Component({
  selector: 'sbm-interventions-list',
  templateUrl: './interventions-list.component.html',
  styleUrls: ['./interventions-list.component.css']
})
export class InterventionsListComponent implements OnInit {

  constructor(private dialog : MdDialog) { }

  ngOnInit() {
  }

  openDialog(){
     this.dialog.open(InterventionsFormsComponent);

  }

}
