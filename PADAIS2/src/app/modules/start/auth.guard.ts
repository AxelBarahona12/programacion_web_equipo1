/* import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }

  token:any;

  canActivate() {
    this.token = localStorage.getItem('token');
    if(this.token){
      return true;
    }else{
      this.router.navigate(['login']);
    }

  }
} */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  token:any;
  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      // Redirigir a la página de inicio de sesión
      this.router.navigate(['login']);
      return false;
    }
  }
}

