import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiendasPadreComponent} from './tiendas-padre/tiendas-padre.component';
import {DetallesTiendaComponent} from './detalles-tienda/detalles-tienda.component';
import {DetallesProductoComponent} from './detalles-producto/detalles-producto.component';
import {CarritoComponent} from './carrito/carrito.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: TiendasPadreComponent },
  { path: 'detalles/:id', component: DetallesTiendaComponent},
  { path: 'producto/:id', component: DetallesProductoComponent},
  { path: 'carrito/:producto', component: CarritoComponent},




];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {} 