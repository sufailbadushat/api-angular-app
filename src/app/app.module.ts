import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PassangerComponent } from './passanger/passanger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesComponent } from './quotes/quotes.component';


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
  },
  {
    path:"productList",
    component:ProductListComponent
  },
  {
    path:"todo",
    component:ToDoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PassangerComponent,
    UsPublicComponent,
    UserInfoComponent,
    ProductListComponent,
    ToDoComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
