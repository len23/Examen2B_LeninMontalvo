/**
 * Tiendas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres:{
      type:'string',
      required: true
    },
    direccion:{
      type:'string',
      required: true
    },
    fechaApertura:{
      type:'string',
      required: true
    },
    /*RUC:{
      type:'number',
      required: true
    },
    matriz:{
      type:'boolean',
      required: true
    }, */
    imagen:{
      type:'string',
      required: true
    },
     productos:{
      collection: 'Productos',
      via: 'tiendaIdFK'
    }
    
  
  },

};

