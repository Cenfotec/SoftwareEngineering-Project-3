import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-registrar',
  templateUrl: './producto-registrar.component.html',
  styleUrls: ['./producto-registrar.component.scss'],
})
export class ProductoRegistrarComponent implements OnInit {
  // Producto: id, nombre, descripción, fecha de fabricación, número de parte y comentarios.
  producto = {
    nombre: '',
    descripcion: '',
    fechaFabricacion: '',
    numeroParte: 0,
    comentarios: '',
  };

  submitted = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {}

  salvarProducto(): void {
    const data = {
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      fechaFabricacion: this.producto.fechaFabricacion,
      numeroParte: this.producto.numeroParte,
      comentarios: this.producto.comentarios,
    };

    this.productoService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  nuevoProducto(): void {
    this.submitted = false;
    this.producto = {
      nombre: '',
      descripcion: '',
      fechaFabricacion: new Date().toString(),
      numeroParte: 0,
      comentarios: '',
    };
  }
}
