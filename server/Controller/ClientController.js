const client=require('../Models/clientModel')
// function getAllclient client : 
/**
 * methode => get 
 * @Route => /client/getAllclient
 * access => private
 */

exports.getAllclient = async (req, res) => {
  try {
  const data = await client.find({});

  console.log(data);

  res.send(data).status(200)
} 
catch (error) 
{
  console.log(error);
  res.status(400).send({message: "client is not founded"})
  
  
}
};



// function creat client : 
/**
 * methode => post 
 * @Route => api/client/createclient/
 * access => private
 * 
 */
exports.createClient = async (req, res) => {
    const {NumberPhone,name,cin} = req.body

    if(!NumberPhone || !name || !cin){
        
        throw new Error('please add all files ')  
    }
    // check for number client if already exist 
    const clientExist = await client.findOne({ cin })
    if (clientExist) {
        return res.status(400).send('i m sorry client has been already exist')
    }
  try {

   // create the apparetement
   
    const clt = await client.create
    
    ({
        NumberPhone:NumberPhone,
         name:name,
         cin:cin,
    });
    console.log(clt);
  
    res.status(200).json({
      success: true,
      message: "client created successfully",
      clt,
    });
  } catch (err) {
    throw new Error(err)
  
  }

};

// function Delete client : 
/**
 * methode => delete 
 * @Route => /api/client/deleteclient/:id_Apartment
 * access => private
 */

try {
  exports.deleteClient = async (req, res) => {
    const id_Client = req.params.id;
    const data = await client.deleteOne({
      where: {
        id_Client: id_Client,
      },
    });
    res.status(200).json({
      success: true,
      message: "client deleted successfully",
      data: data,
    });
  };


} catch (error) {
  console.log(err);
}



// function getupdate client : 
/**
 * methode => put 
 * @Route => /api/client/updateclient:id_Apartment
 * access => private
 */
//update client:

exports. updateClient= async (req, res) => {
  const id = req.params.id;
  const {NumberPhone,name,cin}= req.body;

  // check for number if already exist
  const CheckclientUpdate = await client
      .findByIdAndUpdate({_id : id},
        {NumberPhone: NumberPhone,
          name: name,
          cin: cin
        });
  if (CheckclientUpdate) {
     res.status(200).json({ message: "client Updated Successfully !" });
  } else {
      res.status(400).json({ message: "Error  try again" });
  }
};



exports. GetSingleclient = async (req, res) => {
  const clients = await client.findById(req.params.id)
  if (clients) {
      res.status(200)
          .json(clients)
  } else {
      res.status(400)
          .json({ message: "Error  please try later  ! thank you" })
  }
}
