import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoRegistrarComponent } from './entities/producto/producto-registrar/producto-registrar.component';
import { ProductoListarComponent } from './entities/producto/producto-listar/producto-listar.component';
import { ProductoDetalleComponent } from './entities/producto/producto-detalle/producto-detalle.component';
import { ErrorComponent } from './layouts/error/error.component';

const routes: Routes = [
  { path: 'productos/registrar', component: ProductoRegistrarComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'productos', component: ProductoListarComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
