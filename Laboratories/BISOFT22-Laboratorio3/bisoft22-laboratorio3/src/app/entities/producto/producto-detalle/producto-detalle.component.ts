import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent implements OnInit {
  productoActual: any = null;
  mensaje = '';

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mensaje = '';
    this.obtenerProducto(this.route.snapshot.paramMap.get('id'));
  }

  obtenerProducto(id: any): void {
    this.productoService.get(id).subscribe(
      (data) => {
        this.productoActual = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizarProducto(): void {
    this.productoService
      .update(this.productoActual.id, this.productoActual)
      .subscribe(
        (response) => {
          console.log(response);
          this.mensaje = 'El producto ha sido actualizado satisfactoriamente';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  borrarProducto(): void {
    this.productoService.delete(this.productoActual.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/productos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
