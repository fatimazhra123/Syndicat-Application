const express = require('express');
const app = express();
require('dotenv').config();
const user =require('./Models/UserModel')
const Appartements = require('./Models/AppartementModel')
const Payemments = require('./Models/PayemmentModel')
const client =require('./Models/clientModel')
const apiError = require('./Utils/ErrorsApi')
const globalError = require('./Middelware/ErrorsHandlling')
const configdb = require('./Config/configdb');





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




app.use('/api/auth', authRouter)
app.use('/api/Appartement/',AppartementRoutes)
app.use('/api/payement/',PayementRoutes)
app.use('/api/client/',ClientRoutes)





app.all('*', (req, res, next) => {
    //create error and send it to error 
    next(new apiError(`Can't find this routeeeeee: ${req.originalUrl}`, 400))
})

app.use(globalError);
    












const port = process.env.PORT|| 8080


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = app
