const mongoose = require('mongoose')
// Define MongoDB models
const PaymentShema = mongoose.Schema({

    date: {
      type:Date
    },
    amount: {
      type:Number
    },
 
    namberDappartement : {
    type: String,
       ref: 'Appartement'
     },
      cin: {
      type: String,
       ref: 'client'
       }

});
  

  module.exports = mongoose.model('Payment', PaymentShema);