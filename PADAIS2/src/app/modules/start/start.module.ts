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
import { CreateTimeTableComponent } from './timetable/create-time-table/create-time-table.component';
import { ListTimeTableComponent } from './timetable/list-time-table/list-time-table.component';
import { LocationComponent } from './timetable/location/location.component';
import { UpdateTimeTableComponent } from './timetable/update-time-table/update-time-table.component';
@NgModule({
  declarations: [
    StartComponent,
    RegisterComponent,
    LoginComponent,
    TimetableComponent,
    CarouselComponent,
    RecomprodComponent,
    CreateTimeTableComponent,
    ListTimeTableComponent,
    LocationComponent,
    UpdateTimeTableComponent,

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
