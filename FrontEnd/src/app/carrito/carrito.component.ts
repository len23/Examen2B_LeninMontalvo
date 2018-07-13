import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../Producto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductosService} from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() producto: Producto;
  productos:Producto[]=[];

  constructor(private route: ActivatedRoute,
    private productoService: ProductosService,
    private location: Location) { }

  ngOnInit() {

  }



}
