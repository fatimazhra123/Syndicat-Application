const Payement=require('../Models/AppartementModel')
// function getAllAppartement Appartement : 
/**
 * methode => get 
 * @Route => /Payement/getAllAppartement
 * access => private
 */

exports.getAllPayement = async (req, res) => {
  try {
  const data = await Payement.findAll({});

  console.log(data);

  res.send(data).status(200)
} 
catch (error) 
{
    console.log(error);
    res.json({message: "Payement is not founded"})
    .status(400)
}
};

exports.getAllPayementToRender = async (req, res) => {
  const data = await Payement.findAll({});
  res.render("", {
    Payements: data,
  });
};

// functioncreat Payement Payement : 
/**
 * methode => post 
 * @Route => api/Payement/createPayement/
 * access => private
 * 
 */
exports.createPayement = async (req, res) => {

  try {
   
    const data = await Payement.create
    ({
        residence: req.body.numberDPayement,
        nameDPayement: req.body.Services,
       
    });
    console.log(data);
    res.send({
      success: true,
      message: "Payement created successfully",
      data: data,
    });
  } catch (err) {
    throw new Error(err)
  }

};

// function Delete Payement : 
/**
 * methode => delete 
 * @Route => /Payement/deletePayement/:id_Payement
 * access => private
 */

try {
  exports.deletePayement = async (req, res) => {
    const id_Payement = req.params.id_Payement;
    const data = await Payement.destroy({
      where: {
        id_Payement: id_Payement,
      },
    });
    res.send({
      success: true,
      message: "Payement deleted successfully",
      data: data,
    });
  };



} catch (error) {
  console.log(err);
}



// function getupdate Payement : 
/**
 * methode => put 
 * @Route => /Payement/Payement/:id_Payement
 * access => private
 */
//update Payement:

exports.updatePayement = async (req, res) => {
  const id_Payement = req.params.id_Payement;
  const data = await Payement.Update(
    {
        residence: req.body.numberDPayement,
        nameDPayement: req.body.Services,
    },
    {
      where: {
        id_Payement: id_Payement,
      },
    }
  );

  res.send({
    success: true,
    message: "Payement updated successfully",
    data: data,
  });
};


