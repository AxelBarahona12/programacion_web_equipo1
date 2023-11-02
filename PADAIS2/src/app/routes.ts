import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';

export const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule) },
  { path: 'products-list', component: ProductsListComponent}
  // { path: "", pathMatch: 'fail', redirectTo: 'add-products' },
  //{path: "products", loadChildren: ()=> import("./modules/products/products.module").then(m=>m.ProductsModule)}
  //{path: "principal", loadChildren: ()=> import("./modules/principal/principal.module").then(m=>m.PrincipalModule)}
];
