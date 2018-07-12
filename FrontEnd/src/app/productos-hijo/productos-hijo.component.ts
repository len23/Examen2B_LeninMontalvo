import { Component, OnInit } from '@angular/core';
import {Producto} from '../Producto';
import {PRODUCTOS} from '../mock-productos';


@Component({
  selector: 'app-productos-hijo',
  templateUrl: './productos-hijo.component.html',
  styleUrls: ['./productos-hijo.component.css']
})
export class ProductosHijoComponent implements OnInit {

  productos = PRODUCTOS;

  constructor() { }

  ngOnInit() {
  }

}
