/**
 * Productos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    vendido:{
      type: 'boolean',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    descripcion:{
      type:'string',
      required: true
    },
    precio:{
      type:'number',
    
    },
    fechaLanzamientoProducto:{
      type:'string',
      required: true
    },
    aniosGarantia:{
      type:'string',
      required: true
    },
    imagen:{
      type:'string',
      required: true
    },
    tiendaIdFK:{
      model:'Tiendas'
    } 
  },

};

