import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  users!: any;


  constructor(private dataService: DataService) {  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.users().subscribe((data: any) => {
      this.users = data.data;
    });
  }

  delete(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.dataService.deleteUser().subscribe(() => {
        // Eliminar el usuario de la lista local
        this.users = this.users.filter((user: any) => user.id !== id);
      });
    }
  }
}

