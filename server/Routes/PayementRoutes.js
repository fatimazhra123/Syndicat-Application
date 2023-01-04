const express = require("express");
const router = express.Router();
const { getAllPayement,createPayement,deletePayement,updatePayement} = require("../Controller/PayemmentController");


router.get("/getAllPayement",getAllPayement);
router.post("/createPayement",createPayement);
router.delete("/deletePayement/:id_Payement", deletePayement);
router.put("/updatePayement/:id_Payement",updatePayement);











module.exports = router;