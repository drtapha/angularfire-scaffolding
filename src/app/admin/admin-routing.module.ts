import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes : Routes = [
        {
            path : 'admin',
            component : AdminComponent,
            children : [
                {
                    path : '',
                    component : DashboardComponent
                },
                {
                    path : 'users',
                    component : UsersListComponent
                }
            ]
        }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
