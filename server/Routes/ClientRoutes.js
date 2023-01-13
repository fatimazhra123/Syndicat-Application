const express = require('express');
const router = express();
const {createClient , updateClient ,deleteClient ,getAllclient, GetSingleclient} = require('../Controller/ClientController')

router.get('/getAllclient',getAllclient)
router.post('/createClient',createClient)
router.put('/updateClient/:id',updateClient)
router.delete('/deleteClient/:id',deleteClient)
router.get('/getClientById/:id' ,GetSingleclient)



module.exports = router