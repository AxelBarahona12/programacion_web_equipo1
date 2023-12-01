import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private actualizarHeader = new Subject<void>();

  

  notificarActualización(){
    this.actualizarHeader.next();
  }

    siActualizarHeader(){
      return this.actualizarHeader.asObservable();
    }

  constructor() { }
}
