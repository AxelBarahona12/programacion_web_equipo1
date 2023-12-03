import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../modules/start/confirmed.validator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adm-register',
  templateUrl: './adm-register.component.html',
  styleUrls: ['./adm-register.component.scss']
})
export class AdmRegisterComponent {

  form!: FormGroup;
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private toastr: ToastrService, private location: Location){

   }


    createForm(){
      this.form = this.formBuilder.group({
        name: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['',[Validators.required]],
        confirmPassword: ['', Validators.required]
      }, {
        validator: MustMatch('password', 'confirmPassword')

      });
    }

    ngOnInit(): void {
      this.createForm();

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }

    this.dataService.admRegister(this.form.value).subscribe(res => {
      this.data = res;

      if (this.data.status === 1){
        this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar: true
        });
      }else{
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut:2000,
          progressBar: true
        });
      }
      this.submitted = false;
      this.form.get('name')?.reset();
      this.form.get('email')?.reset();
      this.form.get('password')?.reset();
      this.form.get('confirmPassword')?.reset();
      this.form.get('role',)?.reset();

    });
  }

  goBack(): void {
    this.location.back();
  }
}


