import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent {
  form!: FormGroup;
  submitted = false;
  userId: any;

  constructor(
    private formBuilder: FormBuilder, private dataService: DataService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute, private location: Location) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      this.userId = localStorage.getItem('user_id');
    });

    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.userId) {
      const userIdNumber: number = +this.userId;  // Intenta convertir a número

      if (!isNaN(userIdNumber)) {
        this.dataService.getUserById(userIdNumber).subscribe((res) => {
          const userData = res.data;
          this.form.patchValue(userData);
        });
      } else {
        console.error('Error al convertir userId a número');
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const updatedUserData = { ...this.form.value, id: this.userId };

    this.dataService.admUpdaterUsers(this.userId, updatedUserData).subscribe((res) => {
      if (res.status === 1) {
        this.toastr.error(res.message, 'Error', {
          timeOut: 2000,
          progressBar: true
        });
      } else {
        this.toastr.success(res.message, 'Exito', {
          timeOut: 2000,
          progressBar: true
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
