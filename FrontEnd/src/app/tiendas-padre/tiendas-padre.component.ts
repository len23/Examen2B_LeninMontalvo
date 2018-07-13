import { Component, OnInit } from '@angular/core';
import {Tienda} from '../Tienda';
import {TiendasService} from '../tiendas.service';


@Component({
  selector: 'app-tiendas-padre',
  templateUrl: './tiendas-padre.component.html',
  styleUrls: ['./tiendas-padre.component.css']
})
export class TiendasPadreComponent implements OnInit {
  /* tiendas = TIENDAS; */
  tiendas:Tienda[];
  tienda:Tienda={
    nombres:'',
    direccion:'',
    fechaApertura:''
  };
  contador:number=0;
  constructor(private tiendaService:TiendasService) {
   }

  ngOnInit() {
    this.getTiendas();
  }

  getTiendas(): void {
    this.tiendaService.getTiendas()
        .subscribe(tiendas => this.tiendas = tiendas);
  } 




}
