import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'sbm-interventions-forms',
  templateUrl: './interventions-forms.component.html',
  styleUrls: ['./interventions-forms.component.css']
})
export class InterventionsFormsComponent implements OnInit {

  constructor(private dialog : MdDialogRef<InterventionsFormsComponent>) { }

  ngOnInit() {
  }

}
