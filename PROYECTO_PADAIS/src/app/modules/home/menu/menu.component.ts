import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HorarioService } from 'src/app/services/horario.service';
import { Dia, Unicornio } from 'src/app/shared/unicornio';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  
  schedule: any[][] = [];
  semana: Dia[]=[
    {
      name:"Lunes",
      horario: "9:00 AM a 5:00 PM"
    },
    {
      name:"Martes",
      horario: "9:00 AM a 5:00 PM"
    },
    {
      name:"Miercoles",
      horario: "9:00 AM a 5:00 PM"
    },
    {
      name:"Jueves",
      horario: "9:00 AM a 5:00 PM"
    },
    {
      name:"Viernes",
      horario: "9:00 AM a 5:00 PM"
    },
    {
      name:"Sabado",
      horario: "9:00 AM a 2:00 PM"
    },
    {
      name:"Domingo",
      horario: "No se labora"
    }

  ];
    days:Dia[]=[];

  constructor(public Horario:HorarioService) {
 
  }
  ngOnInit(): void {
    //this.Horario.NewDays(this.semana).subscribe((Obj)=>{
   // })
    this.Horario.getHoras().subscribe((res)=>{
      this.days=res;
    });
  }
}
