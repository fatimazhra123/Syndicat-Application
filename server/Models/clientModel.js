const mongoose = require('mongoose')
// Define MongoDB models
const ClienteShema = mongoose.Schema({

       name: {
        type:String},
      
         cin: {
          type: String,
        //   unique:true
          }, 

          NumberPhone: {
           type: String,
          //  unique:true
         
      },

      });
      
  
  module.exports = mongoose.model('Client', ClienteShema);