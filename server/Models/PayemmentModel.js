const mongoose = require('mongoose')
// Define MongoDB models
const PaymentShema = mongoose.Schema({

    date: {
      type:Date
    },
    amount: {
      type:Number
    },
  //   apartment: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Apartment',
  // }
  

});
  

  module.exports = mongoose.model('Payment', PaymentShema);