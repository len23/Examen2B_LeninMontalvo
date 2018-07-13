/**
 * Productos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   /*  numeroProducto:{
      type: 'string',
      required: true
    }, */
    nombre: {
      type: 'string',
      required: true
    },
    /* descripcion:{
      type:'string',
      required: true
    }, */
    precio:{
      type:'number',
    
    },
   /*  fechaLanzamientoProducto:{
      type:'string',
      required: true
    },
    aniosGarantia:{
      type:'string',
      required: true
    }, */
    tiendaIdFK:{
      model:'Tiendas'
    } 
    /* numeroProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    fechaLanzamientoProducto: string;
    aniosGarantia: number;
    tiendaId: number;
 */
  },

};

