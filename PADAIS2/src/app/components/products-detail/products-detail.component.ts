import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, // Corregido el nombre de la variable
    private router: Router,
    private activateRoute: ActivatedRoute, // Corregido el nombre de la variable
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.getId = this.activateRoute.snapshot.paramMap.get('id');
    this.updateForm = this.formBuilder.group({ // Corregido el nombre de la variable
      product_name: [''],
      description: [''],
      price: [''],
      amount: [''],
      image:['']
    });

    this.crudService.getmisproductos(this.getId).subscribe(res => {
      console.log(res);
      // this.updateForm.setValue({
      //   product_name: res.product_name,
      //   description: res.description,
      //   price: res.price,
      //   amount: res.amount,
      //   image:res.image
      // });
      this.updateForm.patchValue({product_name : res.product_name});
    });
  }

  ngOnInit(): void {

  }

  onUpdate(): any {
    this.crudService.updatemisproductos(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/products-list'));
      }, (err) => {
        console.log(err);
      });
  }


}
