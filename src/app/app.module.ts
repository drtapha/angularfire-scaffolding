
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';


import { firebaseConfig } from './miscellanous/config';
import { HomeComponent } from './main/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    UserService,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
