
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuard } from './modules/start/auth.guard';


const routes: Routes = [
  {path:"", loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path:"products-list", component:ProductsListComponent, canActivate:[AuthGuard]},
  {path:"add-products", component:AddProductsComponent, canActivate:[AuthGuard]},
  {path:'edit-products/:id', component:ProductsDetailComponent, canActivate:[AuthGuard]},

  //{path:"", pathMatch: 'fail', redirectTo:'add-products'},
  //{path: "products", loadChildren: ()=> import("./modules/products/products.module").then(m=>m.ProductsModule)}
  //{path: "principal", loadChildren: ()=> import("./modules/principal/principal.module").then(m=>m.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
