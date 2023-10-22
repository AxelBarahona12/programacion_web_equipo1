import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { ProductosComponent } from './modules/Productos/Productos.component';
const routes: Routes = [
  
  { path: "home", loadChildren:()=>import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path: 'Productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
