import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { ProductosComponent } from './Productos/Productos.component';
import { ShoopcartComponent } from './modules/home/shoopcart/shoopcart.component';
const routes: Routes = [

  { path: "home", loadChildren:()=>import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path: 'Productos', component: ProductosComponent},
  {path: 'shoopcart', component: ShoopcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
