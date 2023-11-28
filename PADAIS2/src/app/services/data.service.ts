import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl= 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  registerUser(data: any) {
    return this.http.post(this.apiUrl+'/api/register', data);
  }

  login(data: any){
    return this.http.post(this.apiUrl+'/api/login', data)
  }


  users() {
  return this.http.get(this.apiUrl + '/api/users');
}

deleteUser() {
  return this.http.delete(this.apiUrl+'/api/users');
}

}
