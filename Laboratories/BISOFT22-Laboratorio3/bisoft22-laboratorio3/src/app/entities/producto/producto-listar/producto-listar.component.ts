import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.scss']
})
export class ProductoListarComponent implements OnInit {

  productos: any;
  productoActual:any = null;
  currentIndex = -1;
  nombre: string = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getAll()
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refrescarLista(): void {
    this.obtenerProductos();
    this.productoActual = null;
    this.currentIndex = -1;
  }

  setActivarProducto(producto: any, index: number): void {
    this.productoActual = producto;
    this.currentIndex = index;
  }

  buscarNombre(): void {
    this.productoService.findByName(this.nombre)
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

