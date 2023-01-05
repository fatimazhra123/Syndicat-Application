require('dotenv').config();
const express = require('express');
const user =require('./Models/UserModel')
const Appartements = require('./Models/AppartementModel')
const Payemments = require('./Models/PayemmentModel')
const client =require('./Models/clientModel')





const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DATABASE ");
}).catch(() => {
    console.log("Unable to Connected to DATABASE");
})

const app = express();
const coockieparser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coockieparser())
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: false }))


const authRouter = require('./Routes/AuthRoutes')
const AppartementRoutes = require('./Routes/AppartementRoutes')
const PayementRoutes = require('./Routes/PayementRoutes');
const ClientRoutes = require('./Routes/ClientRoutes')


app.use(express.static('public'))



app.use('/api/auth', authRouter)
app.use('/api/Appartement/',AppartementRoutes)
app.use('/api/payement/',PayementRoutes)
app.use('/api/client/',ClientRoutes)




    

const port = process.env.PORT|| 8080

app.listen(port, (err) => {
    if (!err) {
        console.log(`the server is raning in the port ${port}`);
    } else {
        console.log(err);
    }
})


module.exports = app
