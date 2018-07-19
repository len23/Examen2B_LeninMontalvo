import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../Producto';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {ProductosService} from '../productos.service';
import { Tienda } from '../Tienda';
import { TiendasService } from '../tiendas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  producto: Producto;
  productos=[];
  tiendas:Tienda[]=[];
  tienda:Tienda;

  constructor(private route: ActivatedRoute,
    private productoService: ProductosService,
    private location: Location) { }
  ngOnInit() {
    this.getProductos();
    
  }
  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
  }

 
  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(productos =>{ 
          this.productos =productos;
               });
  } 

  /* getProductos1(): void {
    this.productoService.getProductos1()
        .subscribe(productos =>{ 
          this.productos =productos;
               });
  }  */

  

  goBack(): void {
    this.location.back();
  }

  cambiarEstado(producto:Producto){
    console.log('Tienda Id: ', producto.tiendaIdFK);
     this.producto=producto;
    console.log('tiendaIDFK producto', this.producto.tiendaIdFK);
    this.producto.vendido=false;
    this.productoService.updateBorradoProducto(this.producto)
    .subscribe(value=>value=this.producto);
  }

  /* getTiendas(): void {
    this.tiendaService.getTiendas()
        .subscribe(tiendas => this.tiendas = tiendas);
  }  */

  getTienda(): void { 
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Id tienda de carrito', id);
   /*  this.tiendaService.getTienda(id)
      .subscribe(tienda => this.tienda = tienda); */
  }

}