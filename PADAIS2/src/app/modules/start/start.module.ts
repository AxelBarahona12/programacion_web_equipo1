import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StartComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    FormsModule,
    HttpClientModule,

  ]
})
export class StartModule { }
