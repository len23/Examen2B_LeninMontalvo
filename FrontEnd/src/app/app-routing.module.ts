import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiendasPadreComponent} from './tiendas-padre/tiendas-padre.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: TiendasPadreComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {} 