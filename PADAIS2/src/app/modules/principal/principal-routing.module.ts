import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoopcartComponent } from '../shoopcart/shoopcart/shoopcart.component';

const routes: Routes = [
 {path: "", component: ShoopcartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
