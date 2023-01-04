const mongoose = require('mongoose');


const userShema = mongoose.Schema({
        id_user: {
            type: Number,
            autoIncrement: true,
            primaryKey: true
        },
       Username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
      
        ValidateToken: {
            type: String
        },
        Status: {
            type:Boolean,
            defaultValue: false
        },
        Role: {
            type: String,
            default: "Syndicat"
        },
      

    })

    module.exports = mongoose.model('User', userShema);