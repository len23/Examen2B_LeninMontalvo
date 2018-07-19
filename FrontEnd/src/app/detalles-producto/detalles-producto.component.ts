import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductosService} from '../productos.service'
import { Producto } from '../Producto';
import { TiendasService } from '../tiendas.service';
import { Tienda } from '../Tienda';
@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  @Input() producto: Producto;
  productos:Producto[]=[];


  constructor(private route: ActivatedRoute,
              private productoService: ProductosService,
              private location: Location) { }

  ngOnInit() {  
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Esta rutaaaaaa', this.route);
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
  }

  addCarrito( ){

    console.log('producto Id', this.producto.tiendaIdFK);
    this.producto.vendido=true;
    this.productoService.updateProducto(this.producto)
    .subscribe(()=>this.location.back());

  }
 
}
