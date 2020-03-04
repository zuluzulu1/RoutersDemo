import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    UsersComponent,
    ProductsComponent,
    ProductEditComponent, 
    HomeComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
