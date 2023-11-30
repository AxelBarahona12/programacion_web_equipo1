import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/Services/timetable.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-time-table',
  templateUrl: './list-time-table.component.html',
  styleUrls: ['./list-time-table.component.scss']
})
export class ListTimeTableComponent implements OnInit{
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
    })
  }

  //Metodo para eliminar registro
  deleteTime(timeId: number) {
    this.timeService.deleteTime(timeId).subscribe(
      () => {
        this.getAllTime();
      },
      (error: any) => {
        console.error('Error deleting comment', error);
      }
    );
  }

}


