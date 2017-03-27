import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuardService } from './services/auth-guard';

import { HomeComponent } from './main/home/home.component';

const routes : Routes = [
    {
      path : '',
      component : HomeComponent,
      canActivate : [AuthGuardService]
    }

  
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
