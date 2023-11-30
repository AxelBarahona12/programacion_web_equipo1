import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpinionsRoutingModule } from './opinions-routing.module';
import { CreateOpinionComponent } from './create-opinion/create-opinion.component';
import { ListOpinionComponent } from './list-opinion/list-opinion.component';
import { UpdateOpinionComponent } from './update-opinion/update-opinion.component';


@NgModule({
  declarations: [
    CreateOpinionComponent,
    ListOpinionComponent,
    UpdateOpinionComponent
  ],
  imports: [
    CommonModule,
    OpinionsRoutingModule
  ]
})
export class OpinionsModule { }
