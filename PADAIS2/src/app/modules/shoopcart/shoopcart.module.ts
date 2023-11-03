import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoopcartComponent } from './shoopcart/shoopcart.component';



@NgModule({
  declarations: [
    ShoopcartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoopcartComponent
  ]
})
export class ShoopcartModule { }
