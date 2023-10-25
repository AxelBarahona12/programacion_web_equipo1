import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveriesComponent } from './deliveries/deliveries.component';


@NgModule({
  declarations: [
    DeliveriesComponent
  ],
  imports: [
    CommonModule,
    DeliveriesRoutingModule
  ]
})
export class DeliveriesModule { }
