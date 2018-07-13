import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {TiendasService} from '../tiendas.service'
import { Tienda } from '../Tienda';

@Component({
  selector: 'app-detalles-tienda',
  templateUrl: './detalles-tienda.component.html',
  styleUrls: ['./detalles-tienda.component.css']
})
export class DetallesTiendaComponent implements OnInit {

  @Input() tienda: Tienda;
  constructor( private route: ActivatedRoute,
    private tiendaService: TiendasService,
    private location: Location) { }

  ngOnInit() {
    this.getTienda();
    
  }

  getTienda(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tiendaService.getTienda(id)
      .subscribe(tienda => this.tienda = tienda);
  }

}
