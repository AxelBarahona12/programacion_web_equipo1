import { Component,InjectionToken, OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Producto } from 'src/app/models/producto';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      articulos: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      estado: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();

  }

  agregarProducto(){
    
    const PRODUCTO: Producto = {
      articulos: this.productoForm.get('articulos')?.value,
      direccion: this.productoForm.get('direccion')?.value,
      fechaCompra: this.productoForm.get('fechaCompra')?.value,
      estado: this.productoForm.get('estado')?.value,
      fechaEntrega: this.productoForm.get('fechaEntrega')?.value
    }

if(this.id !==null){
  this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
    this.toastr.info('El producto fue actualizado con exito!', 'Producto Actualizado!');
      this.router.navigate(['/']);
  })
}else{
  console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })
}

    
    
  }

  esEditar(){
    if(this.id !==null){
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          articulos: data.articulos,
          direccion: data.direccion,
          fechaCompra: data.fechaCompra,
          estado: data.estado,
          fechaEntrega: data.fechaEntrega
        })
      })
    }
  }
}


function Inject(MAT_DATE_LOCALE: InjectionToken<{}>): (target: typeof CrearProductoComponent, propertyKey: undefined, parameterIndex: 5) => void {
  throw new Error('Function not implemented.');
}

