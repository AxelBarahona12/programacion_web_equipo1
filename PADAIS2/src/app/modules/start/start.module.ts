import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecomprodComponent } from './recomprod/recomprod.component';
import { TimetableComponent} from './timetable/timetable.component'

@NgModule({
  declarations: [
    StartComponent,
    RegisterComponent,
    LoginComponent,
    TimetableComponent,
    CarouselComponent,
    RecomprodComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ]
})
export class StartModule { }
