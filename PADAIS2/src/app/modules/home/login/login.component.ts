import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;
  token: any;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private headerService: HeaderService
  ) {}

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.dataService.login(this.form.value).subscribe((res) => {
      this.data = res;

      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);


        this.headerService.notificarActualización();

        this.router.navigate(['/start']);
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.code),
          {
            timeOut: 2000,
            progressBar: true
          }
        );
      } else if (this.data.status === 0) {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.code),
          {
            timeOut: 2000,
            progressBar: true
          }
        );
      }
    });
  }
}