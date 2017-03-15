import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertComponent } from './alert/alert.component';

import { AddAlertDirective } from './alert/ad-alert.directive';
import { RegisterComponent } from './register/register.component';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    AddAlertDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AlertComponent,
    AddAlertDirective,
    RegisterComponent,
  ],
  entryComponents : [
    AlertComponent
  ]
})
export class SharedModule { }
