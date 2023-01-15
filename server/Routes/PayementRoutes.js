const express = require("express");
const router = express.Router();
const { getAllPayement,createPayement,deletePayement,GetSinglePayement} = require("../Controller/PayemmentController");


router.get("/getAllPayement",getAllPayement);
router.post("/createPayement",createPayement);
router.delete("/deletePayement/:id", deletePayement);
router.get('/Payement/:id',GetSinglePayement)








module.exports = router;