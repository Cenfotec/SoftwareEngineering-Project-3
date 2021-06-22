import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoRegistrarComponent } from './entities/producto/producto-registrar/producto-registrar.component';
import { ProductoDetalleComponent } from './entities/producto/producto-detalle/producto-detalle.component';
import { ProductoListarComponent } from './entities/producto/producto-listar/producto-listar.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoRegistrarComponent,
    ProductoDetalleComponent,
    ProductoListarComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
