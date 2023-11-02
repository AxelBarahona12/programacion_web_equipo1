import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent,
    children: [
    {path:"shoopcart", loadChildren:()=>import("../principal/principal.module").then(m=>m.PrincipalModule)},
    {path:"products", loadChildren:()=>import("../products/products.module").then(m=>m.ProductsModule)},
    {path:"deliveries", loadChildren:()=>import("../deliveries/deliveries.module").then(m=>m.DeliveriesModule)},
    {path:"start",loadChildren:()=>import("../start/start.module").then(m=>m.StartModule)},

    // test
    {path: 'products-list', component: ProductsListComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
