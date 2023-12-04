import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  currentUser: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const userId = localStorage.getItem('user_id');
    console.log('UserId from localStorage:', userId);

    if (userId) {
      const userIdNumber: number = +userId;
      console.log('Converted UserId to number:', userIdNumber);

      if (!isNaN(userIdNumber)) {
        this.dataService.getUserById(userIdNumber).subscribe((res) => {
          console.log('Response from getUserById:', res);
          this.currentUser = res.data;
          console.log('Current User:', this.currentUser);
        });
      } else {
        console.error('Error al convertir userId a número');
      }
    }
  }

}
