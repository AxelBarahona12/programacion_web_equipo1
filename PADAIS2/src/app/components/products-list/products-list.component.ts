import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductsComponent } from '../add-products/add-products.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  products: any = [];

  constructor(
    private crudService: CrudService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.crudService.getmisproducto().subscribe((res) => {
      this.products = res;
    });
  }

  openDialog(): void {
    this.dialog.open(AddProductsComponent, {
      height: '50%',
      disableClose: true
    })
  }

  delete(id: any, i: number) {
    console.log(id);
    this.crudService.deletemisproductos(id).subscribe(() => {
      this.products.splice(i, 1);
    });
  }
}
