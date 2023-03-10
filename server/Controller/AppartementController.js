const Appartement=require('../Models/AppartementModel')



// function getAllAppartement Appartement : 
/**
 * methode => get 
 * @Route => api/Appartement/getAllAppartement
 * access => private
 */

exports.getAllAppartement = async (req, res) => {
  try {
  const data = await Appartement.find({});

  console.log(data);

  res.send(data).status(200)
} 
catch (error) 
{
  console.log(error);
  res.status(400).send({message: "Appartement is not founded"})
  

}
};


// functioncreat Appartement Appartement : 
/**
 * methode => post 
 * @Route => api/Appartement/createAppartement/
 * access => private
 * 
 */


exports.createAppartement = async (req, res) => {
  const { residence, namberDappartement } = req.body;
  if (!residence || !namberDappartement) {
      res.status(400)
          .json({ message: "Please fill all required fields!" })
  }

  const checkAppartementNumber = await Appartement.findOne({namberDappartement: req.body.namberDappartement})
  if(checkAppartementNumber){
      res.json({message: " i m sorry Appartement has been already exist "})
  }

  // Create Appartement :
  const appartement = await Appartement.create({
      residence,
      namberDappartement
  })
  if (appartement) {
      res.status(200)
          .json({ message: "Appartement Created Successfully !" })
  }
}
 

// function Delete Appartement : 
/**
 * methode => delete 
 * @Route => /api/Appartement/deleteAppartement/:id_Apartment
 * access => private
 */

try {
  exports.deleteAppartement = async (req, res) => {
    const id_Apartment = req.params.id_Apartment;
    const data = await Appartement.deleteOne({
      where: {
        id_Apartment: id_Apartment,
      },
    });
    res.status(200).json({
      success: true,
      message: "Appartement deleted successfully",
      data: data,
    });
  };


} catch (error) {
  console.log(err);
}



// function getupdate Appartement : 
/**
 * methode => put 
 * @Route => /api/Appartement/updateAppartement:id_Apartment
 * access => private
 */
//update Appartement:

exports. updateAppartement= async (req, res) => {
  const {residence,namberDappartement} = req.body;
  const _id = req.params.id;
  // if (!residence || !namberDappartement) {
  //    res.status(400).json({ message: "please fill all fields !" });
  // }
  // check for number if already exist
  const CheckAppartementUpdate = await Appartement
      .findOneAndUpdate({ _id,residence,namberDappartement});
  if (CheckAppartementUpdate) {
     res.status(200).json({ message: "Appartement Updated Successfully !" });
  } else {
      res.status(400).json({ message: "Error  try again" });
  }
};


//http://localhost:8080/api/Appartement/appartement/
exports. GetSingleAppartement = async (req, res) => {
  const appartement = await Appartement.findById(req.params.id)
  if (appartement) {
      res.status(200)
          .json(appartement)
  } else {
      res.status(400)
          .json({ message: "Error  please try later  ! thank you" })
  }
}

