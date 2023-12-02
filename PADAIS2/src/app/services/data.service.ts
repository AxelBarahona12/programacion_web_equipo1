import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post(this.apiUrl + '/api/register', data);
  }

  login(data: any) {
    return this.http.post(this.apiUrl + '/api/login', data);
  }

  users() {
    return this.http.get(this.apiUrl + '/api/users');
  }

  deleteUser(id: any, i: number) {
    return this.http.delete(`${this.apiUrl}/api/deleteUser/${id}`);
  }

  handleLoginResponse(response: any): void {
    if (response.status === 1 && response.data && response.data.token) {
      const token = response.data.token;

      const claims = JSON.parse(atob(token.split('.')[1]));

      const role = claims.role || null;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    }
  }
  
  getRoleFromStorage(): string | null {
    return localStorage.getItem('role');
  }

}
