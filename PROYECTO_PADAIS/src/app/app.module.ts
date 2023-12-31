import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ProductosComponent } from './Productos/Productos.component';
import { ShoopcartComponent } from './modules/home/shoopcart/shoopcart.component';

@NgModule({
  declarations: [
    AppComponent,
      ProductosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
