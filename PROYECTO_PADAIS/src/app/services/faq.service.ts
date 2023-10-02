import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf, from, mergeMap } from 'rxjs';
import { Preguntas } from '../shared/FAQ';
@Injectable({
  providedIn: 'root'
})
export class FaqService {

  url:string;
  constructor(public http:HttpClient){
    this.url="https://crudcrud.com/api/f5d5f6fc2421490487be9de328b4e43c/Preguntas";
    }

    public Preguntass(model:Preguntas):Observable<Preguntas>{
      return this.http.post<Preguntas>(this.url, model);
    }
    public getRespuestas():Observable<Preguntas[]>{
      return this.http.get<Preguntas[]>(this.url)
    }
    public NewPreguntas(model:Preguntas[]):Observable<Preguntas>{
      return from(model).pipe(mergeMap(model => <Observable<Preguntas>>this.http.post(this.url, model)));
    }
  
  }

