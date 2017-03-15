import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
        {
            path : 'admin',
            component : AdminComponent,
            children : [
                {
                    path : '',
                    component : DashboardComponent
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
