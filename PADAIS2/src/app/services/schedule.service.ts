import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from './schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://127.0.0.1:8000/api/Schedules'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los horarios
  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  // Obtener un horario por ID
  getScheduleById(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo horario
  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiUrl, schedule);
  }

  // Actualizar un horario existente
  updateSchedule(id: number, schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.apiUrl}/${id}`, schedule);
  }

  // Eliminar un horario
  deleteSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

