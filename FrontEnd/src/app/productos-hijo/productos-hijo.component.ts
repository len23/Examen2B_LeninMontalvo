import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service';
import {Producto} from '../Producto';


@Component({
  selector: 'app-productos-hijo',
  templateUrl: './productos-hijo.component.html',
  styleUrls: ['./productos-hijo.component.css']
})
export class ProductosHijoComponent implements OnInit {
  productos:Producto[];

  constructor(private productoService:ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(prodcutos => this.productos = prodcutos);
  } 
}
