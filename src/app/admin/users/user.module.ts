import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormsComponent } from './users-forms/users-forms.component';

//import { UserService } from './user.service';

@NgModule({
  imports: [
    SharedModule, 
    UserRoutingModule
  ],
  exports: [
    UsersListComponent,
    UsersFormsComponent, 
  ],
  declarations: [
    UsersListComponent,
    UsersFormsComponent, 
  ],
  entryComponents: [
    UsersFormsComponent
  ],

})
export class UserModule { }
