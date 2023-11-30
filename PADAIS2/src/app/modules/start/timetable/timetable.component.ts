
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimetableService } from 'src/app/Services/timetable.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})

export class TimetableComponent
  /*daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  hoursOfDay: string[] = ['8:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '5:00 PM'];
  schedule: any[][] = [];

  constructor() {
    // Inicializa el horario de atención con valores predeterminados
    for (let i = 0; i < this.daysOfWeek.length; i++) {
      this.schedule[i] = [];
      for (let j = 0; j < this.hoursOfDay.length; j++) {
        this.schedule[i][j] = { isOpen: true };
      }
    }

    // Establece que no se trabaja los domingos
    const domingoIndex = this.daysOfWeek.indexOf('Domingo');
    if (domingoIndex !== -1) {
      for (let j = 0; j < this.hoursOfDay.length; j++) {
        this.schedule[domingoIndex][j].isOpen = false;
      }
    }
  }
}

/* export class TimetableComponent implements OnInit{
  schedules: any[] = [];
  scheduleForm: FormGroup;

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      day: [''],
      startTime: [''],
      endTime: ['']
    });
  }

  ngOnInit() {
    this.scheduleService.getSchedules().subscribe((data: any[]) => {
      this.schedules = data;
    });
  }

  onSubmit() {
    const scheduleData = this.scheduleForm.value;
    this.scheduleService.createSchedule(scheduleData).subscribe(() => {
      this.ngOnInit(); // Actualizar la lista después de agregar
    });
  }
}

 */

implements OnInit{
  //Definir un array para mostrar los horarios
  list: any[] = [];

  constructor(
    private timeService: TimetableService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllTime();
  }

  //Traer todos los comentarios
  getAllTime(){
    this.timeService.getAll().subscribe((res:any)=>{
      this.list = res.data;
      console.log("sjhhksggsdhu")
    })

    console.log("sjhhaaaaaaaaaksggsdhu")

  }
}
