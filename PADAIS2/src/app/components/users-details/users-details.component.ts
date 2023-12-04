import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  users!: any;
  i!: number;


  constructor(private dataService: DataService, private router: Router, private location: Location) {  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.users().subscribe((data: any) => {
      this.users = data.data;
    });
  }
  deleteUser(id: any, i: number) {
    const shouldDelete = confirm('¿Estás seguro de que quieres eliminar este usuario?');

    if (shouldDelete) {
      console.log(id);

      this.dataService.deleteUser(id, i).subscribe(() => {
        this.deleteUser(i, 1);
        console.log(id);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);

      });

    } else {

    }
  }

  editUser(id: any) {
    this.router.navigate(['/adm-update/' + id]);
  }

  goBack(): void {
    this.location.back();
  }
}

