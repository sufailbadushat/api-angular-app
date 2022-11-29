import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PassangerComponent } from './passanger/passanger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';


const myRoutes: Routes = [
  {
    path: "",
    component: NavBarComponent
  },
  {
    path: "passenger",
    component: PassangerComponent
  },
  {
    path: "usPublic",
    component: UsPublicComponent
  },
  {
    path:"userInfo",
    component:UserInfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PassangerComponent,
    UsPublicComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
