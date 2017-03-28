import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertComponent } from './alert/alert.component';

import { AddAlertDirective } from './alert/ad-alert.directive';
import { RegisterComponent } from './register/register.component';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AddAlertDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
