import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ShoopcartService {
    REST_API: string ='http://127.0.0.1:8000/api/Shoopcart';
    HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');

    constructor(private HttpClient: HttpClient){}



}
