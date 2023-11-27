import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {jwtDecode} from 'node_modules/jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  token:any;
  userData:any;
  email: any;
  viewCart: Boolean=false;

  constructor(private router:Router){}

  updateEmail() {
    this.token = localStorage.getItem('token');
    this.userData = jwtDecode(this.token);
    this.email = this.userData.email;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwtDecode(this.token);
    this.email = this.userData.email;
    this.updateEmail();
    console.log(this.token);
    console.log(this.userData.email);
  }

  logout(){
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.updateEmail();
    this.router.navigate(['/login']);
  }

/*   onToogleCart()
  {
    this.viewCart = !this.viewCart
  }
 */
}
