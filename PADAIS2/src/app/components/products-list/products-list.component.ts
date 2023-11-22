import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductsComponent } from '../add-products/add-products.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  products: any = [];
  productsForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private dialog: MatDialog,
    public formBuilder: FormBuilder,
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
    this.crudService.getmisproducto().subscribe((res) => {
      this.products = res;
    });
  }

  openDialog(): void {
    this.dialog.open(AddProductsComponent, {
      height: '50%',
      width: '50%',
      disableClose: true
    })
  }

  delete(id: any, i: number) {
    console.log(id);
    this.crudService.deletemisproductos(id).subscribe(() => {
      this.products.splice(i, 1);
      console.log(id);
    });
  }

  onSubmit(): any { // Cambiado a onSubmit
    this.crudService.addmisproductos(this.productsForm.value)
      .subscribe(() => {
        console.log('Data added successfully');
        // this.ngZone.run(() => this.router.navigateByUrl('/products-list'));
      }, (err) => {
        console.log(err);
      });
  }

}
