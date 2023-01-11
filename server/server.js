const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const user =require('./Models/UserModel')
const Appartements = require('./Models/AppartementModel')
const Payemments = require('./Models/PayemmentModel')
const client =require('./Models/clientModel')
const apiError = require('./Utils/ErrorsApi')
const globalError = require('./Middelware/ErrorsHandlling')
const configdb = require('./Config/configdb');



// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  

const coockieparser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coockieparser())
app.use(bodyParser.urlencoded({ extended: false }))


const authRouter = require('./Routes/AuthRoutes')
const AppartementRoutes = require('./Routes/AppartementRoutes')
const PayementRoutes = require('./Routes/PayementRoutes');
const ClientRoutes = require('./Routes/ClientRoutes')
const SyndicatRoutes= require('./Routes/SyndicatRoutes')



app.use('/api/admin',SyndicatRoutes)
app.use('/api/auth', authRouter)
app.use('/api/Appartement/',AppartementRoutes)
app.use('/api/payement/',PayementRoutes)
app.use('/api/client/',ClientRoutes)




app.use(globalError);
    












const port = process.env.PORT|| 8080


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = app
