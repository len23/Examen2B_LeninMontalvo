import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TiendasPadreComponent } from './tiendas-padre/tiendas-padre.component';
import { ProductosHijoComponent } from './productos-hijo/productos-hijo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    TiendasPadreComponent,
    ProductosHijoComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
