const express = require('express');
const router = express();
const {CreateClient , UpdateClient , DeleteClient , GetAllClient} = require('../Controller/ClientController')


router.post('/Createclient',CreateClient)
router.put('/Updateclient/:id',UpdateClient)
router.delete('/deleteclient/:id',DeleteClient)
router.get('/getAllclient',GetAllClient)

module.exports = router