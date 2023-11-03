import { Component, OnInit, NgZone} from '@angular/core';
import { Route } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  products:Product[]=[];
  constructor(
    private crudService: CrudService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.crudService.getmisproducto().subscribe((res) => {
      this.products = res;
    });
  }



}
