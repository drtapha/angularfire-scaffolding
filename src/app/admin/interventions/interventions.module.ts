import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { InterventionsListComponent } from './interventions-list/interventions-list.component';
import { InterventionsFormsComponent } from './interventions-forms/interventions-forms.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    InterventionsListComponent,
    InterventionsFormsComponent
  ], 
  entryComponents : [
    InterventionsFormsComponent
  ]
})
export class InterventionsModule { }
