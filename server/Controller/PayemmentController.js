
const Paiment = require("../Models/PayemmentModel");
const Appartement = require("../Models/AppartementModel");
const Client = require("../Models/clientModel");



//create paiements:

exports.createPayement = async (req, res) => {

    const {date , amount , namberDappartement , cin } = req.body;
    if(!date || !amount || !namberDappartement || !cin ){
        res.status(400);
        res.json({message: "Add fill all  fields"})
    }
    
    const SAppartement = await Appartement.findOne({namberDappartement: req.body.namberDappartement});
    if(!SAppartement){
        res.status(400).json({message: "appartement is not Founded"})
    } 
   
    const SClient = await Client.findOne({cin : cin})
    if(!SClient){
        res.status(400).json({message: "Client is not fondedd"})
    }
  
    const idClient = SClient._id;
    const idAppartement = SAppartement._id;
  
    const paiment = await Paiment.create({date,amount,namberDappartement: idAppartement,cin: idClient });
    if(paiment){
        res.status(200)
           .json({message: "Paiment is Done"});
    }else{
        res.status(400)
            .json({message: "Invalid Treatments"})
    }

}

// delete paiments:


exports. deletePayement = async (req, res) => {
    const paiment = await Paiment.findById(req.params.id);
    if(paiment){
        await paiment.destroy();
        res.json({message: "Paiment is delete"})
    }else{
        res.status(404)
        .json({message: "Paiment is not fonded"})
    }
}


//get all paiments:

exports.getAllPayement = async (req, res) => {
    const paiments = await Paiment.findAll({}).populate("namberDappartement").populate("cin");
    if(paiments){
        res.status(200)
        .json(paiments)
    }else{
        res.status(404)
        .json({message: "Paiments Not Found"})
    }   
}




