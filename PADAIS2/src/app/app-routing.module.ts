import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



const routes: Routes = [
  {path:"", loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path:"product-list", component:ProductsListComponent},
  {path:"add-products", component:AddProductsComponent},
  {path:'edit-products/:id', component:ProductsDetailComponent},

  //{path:"", pathMatch: 'fail', redirectTo:'add-products'},
  //{path: "products", loadChildren: ()=> import("./modules/products/products.module").then(m=>m.ProductsModule)}
  //{path: "principal", loadChildren: ()=> import("./modules/principal/principal.module").then(m=>m.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
