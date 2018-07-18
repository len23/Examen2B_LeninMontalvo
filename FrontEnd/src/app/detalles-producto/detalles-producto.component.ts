import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductosService} from '../productos.service'
import { Producto } from '../Producto';
@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  @Input() producto: Producto;
  @Output() anadido = new EventEmitter<boolean>();
  productos:Producto[]=[];


  constructor(private route: ActivatedRoute,
              private productoService: ProductosService,
              private location: Location) { }

  ngOnInit() {  
    this.getProducto();
  
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
  }

  addCarrito(producto:Producto){
    this.producto=producto;
    console.log('tiendaIDFK producto', this.producto.tiendaIdFK);
    this.producto.vendido=true;
    this.productoService.updateProducto(this.producto)
    .subscribe(()=>this.location.back());

  }
 
}
