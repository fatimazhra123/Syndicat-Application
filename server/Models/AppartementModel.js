
const mongoose = require('mongoose');



const ApartementShema = mongoose.Schema({

  namberDappartement: { 
        type:String,
        unique: true
      
      },
      residence:{
        type:String,
        
      }
     

    })

    module.exports = mongoose.model('Apartement', ApartementShema);