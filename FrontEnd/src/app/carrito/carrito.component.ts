import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../Producto';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {ProductosService} from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input() producto: Producto;
  productos=[];
  producto1=[];

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
        .subscribe(productos =>{ this.productos = productos});
  } 

  goBack(): void {
    this.location.back();
  }

  cambiarEstado(producto:Producto){
    this.producto=producto;
    console.log('tiendaIDFK producto', this.producto.tiendaIdFK);
    this.producto.vendido=false;
    this.productoService.updateProducto(this.producto)
    .subscribe(value=>value=this.producto);
  }
 /*  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  } */
}