import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaqService } from 'src/app/services/faq.service';
import { Preguntas } from 'src/app/shared/FAQ';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit{
  

    schedule: any[][] = [];
    ayuda1: Preguntas[]=[
      {
        Pregunta:"¿Como funciona?",
        Respuesta: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las"
      }]
    ayuda2: Preguntas[]=[
      {
        Pregunta:"¿Por qué lo usamos?",
        Respuesta: "s un hecho establecido hace demasiado tiempo que un lector se distr"
      }]
    ayuda3: Preguntas[]=[
      {
        Pregunta:"¿Dónde puedo conseguirlo?",
        Respuesta: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,"
      }]
    ayuda4: Preguntas[]=[
      {
        Pregunta:"¿De dónde viene?",
        Respuesta: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio"
      }
      
    ];
      question:Preguntas[]=[];
      constructor(public Ayuda1:FaqService){
      }

        ngOnInit(): void {
          //this.Horario.NewDays(this.semana).subscribe((Obj)=>{
         // })
          this.Ayuda1.getRespuestas().subscribe((res)=>{
            this.question=res;
          });

      }
}
