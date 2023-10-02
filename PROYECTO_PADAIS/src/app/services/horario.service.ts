import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, mergeMap } from 'rxjs';
import { Dia, Unicornio } from '../shared/unicornio';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  url2:string;
  constructor(public http:HttpClient) {
    this.url2="https://crudcrud.com/api/b209c6e134264180bd2c69e952c1528c/Days";
   }

   public NewDay(model:Dia):Observable<Dia>{
    return this.http.post<Dia>(this.url2, model);
   }
   public getHoras():Observable<Dia[]>{
    return this.http.get<Dia[]>(this.url2)
   }
   public NewDays(model:Dia[]):Observable<Dia>{
    return from(model).pipe(mergeMap(model => <Observable<Dia>>this.http.post(this.url2, model)));
   }
}
