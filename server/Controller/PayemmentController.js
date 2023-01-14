const Paiment = require("../Models/PayemmentModel");
const Appartement = require("../Models/AppartementModel");
const Client = require("../Models/clientModel");






// function get all paiments : 
/**
 * methode => get 
 * @Route => api/payement/getAllPayement
 * access => private
 * 
 */
// const paiments = await Paiment.find().populate('cin').populate('namberDappartement')

exports.getAllPayement = async (req, res) => {
  try {
    const paiments = await Paiment.find().populate('cin').populate('namberDappartement')

  console.log(paiments);

  res.send(paiments).status(200)
} 
catch (error) 
{
  console.log(error);
  res.status(400).send({message: "Appartement is not founded"})
  

}
};


// function create paiements : 
/**
 * methode => post 
 * @Route => api/payement/createPayement
 * access => private
 * 
 */

exports.createPayement = async (req, res) => {

    const {date, amount , namberDappartement ,cin } = req.body;

    // if(!date || !amount || !namberDappartement || !cin ){
    //     res.status(400).json({message: "Add all  field"})
    // }

    const SAppartement = await Appartement.findOne({namberDappartement: namberDappartement});
    console.log('apartment',SAppartement);
    const SClient = await Client.findOne({cin : cin})
    if(!SAppartement || !SClient){
        res.status(400).json({
          success: true,
          message: " not Found"})
    } 
    
  
    const idClient = SClient._id;
    const idAppartement = SAppartement._id;
  
    const paiment = await Paiment.create({date,amount,namberDappartement: idAppartement,cin: idClient });
    if(paiment){
      console.log(paiment);
        res.status(200).json({
          success: true,
          message: "Paiment is Done"});
    }else{
        res.status(400).json({message: "Invalid Treatments"})
    }

}


// function delete paiments: : 
/**
 * methode => delete 
 * @Route => /api/payement/deletePayement/:id
 * access => private
 * 
 */


try {
  exports.deletePayement = async (req, res) => {
    const id_Pyement = await Paiment.findById(req.params.id_Pyement);
    const data = await Paiment.deleteOne({
      where: {
        id_Pyement: id_Pyement,
      },

    });
    res.status(200).json({
      success: true,
      message: "Paiment deleted successfully",
      data: data,
    });
  };


} catch (error) {
  console.log(err);
}






