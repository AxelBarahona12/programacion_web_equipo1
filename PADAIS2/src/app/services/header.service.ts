import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private actualizarHeader = new Subject<void>();

  //Metodo para notificar actualizacion al header

  notificarActualización(){
    this.actualizarHeader.next();
  }

  //Observable para  el header se suscriba a las actualizaciones
    siActualizarHeader(){
      return this.actualizarHeader.asObservable();
    }

  constructor() { }
}
