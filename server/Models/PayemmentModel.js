const mongoose = require('mongoose')
// Define MongoDB models
const PaymentShema = mongoose.Schema({

  date: {
    type: Date,
    require: true
  },
  amount: {
    type: String
  },
  namberDappartement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartement'
  },
  cin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }

});


module.exports = mongoose.model('Payment', PaymentShema);