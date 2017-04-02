import { NgModule } from '@angular/core';


import { AdminRoutingModule } from './admin-routing.module';
import { InterventionsModule } from './interventions/interventions.module';
import { UserModule } from './users/user.module';
import { SharedModule } from '../shared/shared.module';

import { UserService } from '../services';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    InterventionsModule,
    UserModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
  ], 
  providers : [
    UserService
  ]
})
export class AdminModule { }
