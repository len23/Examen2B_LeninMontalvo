import {Tienda} from './Tienda';

export class Producto {
    id:number;
    vendido: boolean;
    nombre: string;
    descripcion: string;
    precio: number;
    fechaLanzamientoProducto: string;
    aniosGarantia: number;
    tiendaIdFK: number;
   
    
   
    
  }