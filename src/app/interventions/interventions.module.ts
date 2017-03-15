import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterventionsListComponent } from './interventions-list/interventions-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterventionsModule], 
  exports : [ InterventionsListComponent]
})
export class InterventionsModule { }
