import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
  daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
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
