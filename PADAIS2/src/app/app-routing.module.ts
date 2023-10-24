import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)},
  //{path: "products", loadChildren: ()=> import("./modules/products/products.module").then(m=>m.ProductsModule)}
  //{path: "principal", loadChildren: ()=> import("./modules/principal/principal.module").then(m=>m.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
