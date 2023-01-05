const mongoose = require('mongoose')
// Define MongoDB models
const ClienteShema = mongoose.Schema({

       name: {
        type:String},
        // apartments: [{
        // type: mongoose.Types.ObjectId,
        //   ref: 'Apartment'
        // }],
         cin: {
          type: String,
          unique:true
          }, 

          NumberPhone: {
           type: String,
          //  unique:true
         
      },

      });
      
  
  module.exports = mongoose.model('Client', ClienteShema);