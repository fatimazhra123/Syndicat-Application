const express = require('express');
const router = express.Router();

const {getUserAdmin} = require ('../Controller/DashboardAdmin')
const sindicatMiddelware= require('../Middelware/SyndicatMiddelware')
const authMiddelware =require('../Middelware/AuthMiddlware')

router.get('/admin/me', authMiddelware, sindicatMiddelware, getUserAdmin)


module.exports = router;