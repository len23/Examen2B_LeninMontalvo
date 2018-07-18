import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ProductosService} from '../productos.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  productos=[];
  items: MenuItem[];
  constructor(private productoService: ProductosService) {
    productoService.productoConfirmado$.subscribe(
      producto => {
        console.log(`${producto.nombre} Ha sido agregado`);
      });
  }
  ngOnInit() {
    this.getProductos();
    this.items = [
      {
        label: 'HOME',
        icon: 'fa fa-home',
        routerLink: 'Home',
        styleClass: 'font-size:200'
      }
    ];
  }

  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(productos =>{
          productos.forEach(element => {
            if(element.vendido==true){
              this.productos.push(element);
            }
          });
        });
  } 

  onAnadido(agreed: boolean) {
    this.getProductos();
  }

}
