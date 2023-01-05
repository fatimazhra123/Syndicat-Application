const express = require('express');
const router = express();
const {createClient , updateClient ,deleteClient ,getAllclient} = require('../Controller/ClientController')

router.get('/getAllclient',getAllclient)
router.post('/createClient',createClient)
router.put('/updateClient/:id',updateClient)
router.delete('/deleteClient/:id',deleteClient)



module.exports = router