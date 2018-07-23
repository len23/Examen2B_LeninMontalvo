import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {TiendasPadreComponent} from './tiendas-padre/tiendas-padre.component';
import {DetallesTiendaComponent} from './detalles-tienda/detalles-tienda.component';
import {DetallesProductoComponent} from './detalles-producto/detalles-producto.component';
import {CarritoComponent} from './carrito/carrito.component'
import {EncabezadoComponent} from './encabezado/encabezado.component'
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: PrincipalComponent,
    children: [
      { path: 'carrito', component: CarritoComponent },
      { path: 'detalles/:id', component: DetallesTiendaComponent,
      children:[
        { path: 'producto/:id', component: DetallesProductoComponent },
      ]
    },
      { path: 'producto/:id', component: DetallesProductoComponent },
      { path: '', component: TiendasPadreComponent },
    ],
  },//Aqui termina el Home 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes,) ],

})
export class AppRoutingModule {} 