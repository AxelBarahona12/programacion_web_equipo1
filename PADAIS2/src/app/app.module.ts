import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './modules/products/productos/productos.component';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ToastrModule } from 'ngx-toastr';
import { StartModule } from './modules/start/start.module';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AddProductsComponent,
    ProductsDetailComponent,
    ProductsListComponent,
    UsersDetailsComponent,
    AdminComponent,
    EditUsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    StartModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
