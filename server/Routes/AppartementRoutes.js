const express = require("express");
const router = express.Router();
const { getAllAppartement,createAppartement,deleteAppartement,updateAppartement} = require("../Controller/AppartementController");


router.get("/getAllAppartement",getAllAppartement);
router.post("/createAppartement",createAppartement);
router.delete("/deleteAppartement/:id_Apartment", deleteAppartement);
router.put("/updateAppartement/:id_Apartment",updateAppartement);










module.exports = router;