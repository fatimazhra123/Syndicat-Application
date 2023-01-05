
const Paiment = require("../Models/PayemmentModel");
const Appartement = require("../Models/AppartementModel");
const Client = require("../Models/clientModel");


exports.CreatePaiment = async (req, res) => {

    const {date , amount , namberDappartement , cin } = req.body;
    if(!date || !amount || !namberDappartement || !cin ){
        res.status(400);
        res.json({message: "Please fill all the fields"})
    }
    
    const SAppartement = await Appartement.findOne({namberDappartement: req.body.namberDappartement});
    if(!SAppartement){
        res.status(400)
        .json({message: "appartement Not Found"})
    } 
   
    const SClient = await Client.findOne({cin : cin})
    if(!SClient){
        res.status(400)
        .json({message: "Client Not Found"})
    }
  
    const idClient = SClient._id;
    const idAppartement = SAppartement._id;
  
    const paiment = await Paiment.create({
        date,
        amount,
        namberDappartement: idAppartement,
        cin: idClient
    });
    if(paiment){
        res.status(200)
           .json({message: "Paiment Passed Successfully"});
    }else{
        res.status(400)
            .json({message: "Invalid Paiment Data"})
    }

}



exports. DeletePaiment = async (req, res) => {
    const paiment = await Paiment.findById(req.params.id);
    if(paiment){
        await paiment.remove();
        res.json({message: "Paiment Deleted"})
    }else{
        res.status(404)
        .json({message: "Paiment Not Found"})
    }
}


exports.GetAllPaiments = async (req, res) => {
    const paiments = await Paiment.find({}).populate("namberDappartement").populate("cin");
    if(paiments){
        res.status(200)
        .json(paiments)
    }else{
        res.status(404)
        .json({message: "Paiments Not Found"})
    }   
}




