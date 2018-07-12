import { Component, OnInit } from '@angular/core';
import {Tienda} from '../Tienda';
import {TIENDAS} from '../mock-tiendas';

@Component({
  selector: 'app-tiendas-padre',
  templateUrl: './tiendas-padre.component.html',
  styleUrls: ['./tiendas-padre.component.css']
})
export class TiendasPadreComponent implements OnInit {
  tiendas = TIENDAS;

  constructor() { }

  ngOnInit() {
  }

}
