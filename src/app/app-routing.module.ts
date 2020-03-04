import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'users', component:UsersComponent, children: [
    { path: ':id/edit', component: UserEditComponent }
  ]},
  { path:'products', component:ProductsComponent, children: [
    {path:':id/edit', component:ProductEditComponent }
  ]},
  { path: 'account', children:[
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
