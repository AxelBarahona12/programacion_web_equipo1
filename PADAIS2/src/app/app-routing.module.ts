import { LocationComponent } from './modules/start/timetable/location/location.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuard } from './modules/start/auth.guard';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { CreateTimeTableComponent } from './modules/start/timetable/create-time-table/create-time-table.component';
import { ListTimeTableComponent } from './modules/start/timetable/list-time-table/list-time-table.component';
import { UpdateTimeTableComponent } from './modules/start/timetable/update-time-table/update-time-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"", loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path:"product-list", component:ProductsListComponent, canActivate:[AuthGuard]},
  {path:"add-products", component:AddProductsComponent, canActivate:[AuthGuard]},
  {path:'edit-products/:id', component:ProductsDetailComponent, canActivate:[AuthGuard]},
  {path:'time-add', component:CreateTimeTableComponent},
  {path:'time-list', component:ListTimeTableComponent},
  {path:'update-time/:id', component:UpdateTimeTableComponent},
  {path:'localUpd/:id', component:LocationComponent},

/*   {path: 'products-list', component: ProductsListComponent, canActivate:[AuthGuard]}, */

  //{path:"", pathMatch: 'fail', redirectTo:'add-products'},
  //{path: "products", loadChildren: ()=> import("./modules/products/products.module").then(m=>m.ProductsModule)}
  //{path: "principal", loadChildren: ()=> import("./modules/principal/principal.module").then(m=>m.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
