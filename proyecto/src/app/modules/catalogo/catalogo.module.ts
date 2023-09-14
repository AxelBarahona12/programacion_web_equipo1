import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
