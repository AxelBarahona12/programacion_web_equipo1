import { RouterModule , Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from '../home/register/register.component';
import { LoginComponent } from '../home/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { RecomprodComponent } from './recomprod/recomprod.component';
import { TimetableComponent} from './timetable/timetable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    StartComponent,
    RegisterComponent,
    LoginComponent,
    TimetableComponent,
    CarouselComponent,
    RecomprodComponent,

  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ]
})
export class StartModule { }
