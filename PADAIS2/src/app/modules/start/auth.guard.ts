import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Verificar la existencia del token y el rol, si existen dirigir al usuario a la ruta determinada
    if (token && role) {
      if (role === 'admin') {
        return true;
      } else if (role === 'user') {

        this.router.navigate(['start']);
        return false;
      }
    }

    //Si no existen tener que mandar al login para poder authentificarse
    this.router.navigate(['login']);
    return false;
  }
}
