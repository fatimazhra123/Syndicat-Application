const express = require("express");
const router = express.Router();
const { getAllPayement,createPayement,deletePayement} = require("../Controller/PayemmentController");


router.get("/getAllPayement",getAllPayement);
router.post("/createPayement",createPayement);
router.delete("/deletePayement/:id_Payement", deletePayement);








module.exports = router;