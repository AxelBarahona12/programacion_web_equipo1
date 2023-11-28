import { StartComponent } from './../start/start/start.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { LoginComponent } from '../start/login/login.component';
import { RegisterComponent } from '../start/register/register.component';
import { ShoopcartComponent } from '../shoopcart/shoopcart/shoopcart.component';
import { AuthGuard } from '../start/auth.guard';
import { UsersDetailsComponent } from 'src/app/components/users-details/users-details.component';
const routes: Routes = [
  { path: "", component: HomeComponent,
    children: [
    {path:"products", loadChildren:()=>import("../products/products.module").then(m=>m.ProductsModule)},
    {path:"deliveries", loadChildren:()=>import("../deliveries/deliveries.module").then(m=>m.DeliveriesModule)},
/*     {path:"start",loadChildren:()=>import("../start/start.module").then(m=>m.StartModule)}, */
    {path: "start", component:StartComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: 'products-list', component: ProductsListComponent, canActivate:[AuthGuard] },
    {path: 'shoopcart', component:ShoopcartComponent},
    {path: 'users-details', component:UsersDetailsComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
