import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ShoopcartModule } from '../shoopcart/shoopcart.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShoopcartModule
  ]
})
export class HomeModule { }
