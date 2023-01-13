const express = require("express");
const router = express.Router();
const SyndicatMiddelware= require('../Middelware/SyndicatMiddelware')
const AuthMiddlware =require('../Middelware/AuthMiddlware')
const { getAllAppartement,createAppartement,deleteAppartement,updateAppartement,GetSingleAppartement} = require("../Controller/AppartementController");


router.get("/getAllAppartement",getAllAppartement);
router.post("/createAppartement",createAppartement);
router.delete("/deleteAppartement/:id_Apartment", deleteAppartement);
router.put("/updateAppartement/:id_Apartment",updateAppartement);
router.get('/appartement/:id',GetSingleAppartement)










module.exports = router;