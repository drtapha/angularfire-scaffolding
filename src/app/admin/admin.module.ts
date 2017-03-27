import { NgModule } from '@angular/core';
import 'hammerjs';

import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from './users/user.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    UserModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
