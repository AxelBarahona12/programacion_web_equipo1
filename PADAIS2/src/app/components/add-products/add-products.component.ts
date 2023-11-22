import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass']
})
export class AddProductsComponent implements OnInit {
  productsForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, // Cambiado a formBuilder
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private dialog: MatDialogRef<AddProductsComponent>
  ) {
    this.productsForm = this.formBuilder.group({ // Cambiado a formBuilder
      product_name: [''],
      description: [''],
      price: [''],
      amount: [''],
      image:[''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): any { // Cambiado a onSubmit
    this.crudService.addmisproductos(this.productsForm.value)
      .subscribe(() => {
        console.log('Data added successfully');
        this.dialog.close();
  }, (err) => {
        console.log(err);
      });
  }
  cancel(){
    this.dialog.close();

  }
}
