import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TiendasPadreComponent } from './tiendas-padre/tiendas-padre.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DetallesTiendaComponent } from './detalles-tienda/detalles-tienda.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {CardModule} from 'primeng/card';
import { ProductosHijoComponent } from './productos-hijo/productos-hijo.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    TiendasPadreComponent,
    EncabezadoComponent,
    DetallesTiendaComponent,
    DetallesProductoComponent,
    CarritoComponent,
    ProductosHijoComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    CardModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
