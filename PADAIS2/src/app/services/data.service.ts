import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';


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

  admRegister(data: any){
    return this.http.post(this.apiUrl + '/api/admRegister', data);
  }

  admUpdaterUsers(userId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/admUpdateUsers/${userId}`, data).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de actualización de usuario', error);
        throw error;
      })
    );
  }

  userUpdate(userId: number, newName: string): Observable<any> {
    const updateData = { name: newName };
    return this.http.put(`${this.apiUrl}/api/userUpdate/${userId}`, updateData);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/getUserById/${userId}`).pipe(
      catchError((error) => {
        console.error('Error en la solicitud para obtener datos del usuario por ID', error);
        throw error; 
      })
    );
  }

  handleLoginResponse(response: any): void {
    if (response.status === 1 && response.data && response.data.token) {
      const token = response.data.token;

      const claims = JSON.parse(atob(token.split('.')[1]));
      const role = claims.role || null;
      const userId = claims.user_id || null;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user_id', userId);
    }
  }




  getRoleFromStorage(): string | null {
    return localStorage.getItem('role');
  }



}
