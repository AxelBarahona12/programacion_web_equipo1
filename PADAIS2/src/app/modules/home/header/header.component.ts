import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: any;
  userData: any;
  email: any;
  role: any;
  viewCart: Boolean = false;

  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.siActualizarHeader().subscribe(() => {
      this.updateEmail();
    });
  }

  updateEmail() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      try {
        this.userData = jwtDecode(this.token);
        this.email = this.userData.email;
        this.role = this.userData.role;
      } catch (error) {
        console.error('Error decoding token:', error);
        this.email = undefined;
        this.role = undefined;
      }
    } else {
      this.email = undefined;
      this.role= undefined;
    }
  }

  routeUser(): string{
    
  if (this.role === 'admin') {
    return '/admin';
  } else {
    return '/user';
  }
}

  ngOnInit(): void {
    this.updateEmail();
    console.log(this.token);
    console.log(this.email);

  }

  logout() {
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.updateEmail();
    console.log('Se actualizó');
    this.headerService.notificarActualización();
    this.router.navigate(['/start']);
  }
}
