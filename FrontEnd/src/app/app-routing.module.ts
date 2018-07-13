import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiendasPadreComponent} from './tiendas-padre/tiendas-padre.component'
import {DetallesTiendaComponent} from './detalles-tienda/detalles-tienda.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: TiendasPadreComponent },
  { path: 'detalles/:id', component: DetallesTiendaComponent},


];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {} 