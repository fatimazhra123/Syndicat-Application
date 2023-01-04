// const Client=require('../Models/clientModel')
// // function getAllClient Client : 
// /**
//  * methode => get 
//  * @Route => /Client/getAllClient
//  * access => private
//  */

// exports.GetAllClient = async (req, res) => {
//   try {
//   const data = await Client.findAll({});

//   console.log(data);

//   res.send(data).status(200)
// } 
// catch (error) 
// {
//     console.log(error);
//     res.json({message: "Client is not founded"})
//     .status(400)
// }
// };

// exports.getAllClientToRender = async (req, res) => {
//   const data = await Client.findAll({});
//   res.render("", {
//     Clients: data,
//   });
// };

// // functioncreat Client Client : 
// /**
//  * methode => post 
//  * @Route => api/Client/createClient/
//  * access => private
//  * 
//  */
// exports.CreateClient = async (req, res) => {
//     const {name,cin,NumberPhone} = req.body

//     if(!name || !cin || !NumberPhone){
//         throw new Error('please add all files ')
//     }
//      // check for   cin Client if already exist 
//     const ClientExist = await Client.findOne({ where: {cin} })
//     if (ClientExist) {
//         return res.status(400).json('noooo!! Client has been already exist')
//     }
//   try {

//    // create the Client
   
//     const clt = await Client.create
//     ({ name, cin,NumberPhone});
//     console.log(clt);
  
//     res.status(200).json({
//       success: true,
//       message: "Client created successfully",
//       clt,
//     });
//   } catch (err) {
//     throw new Error(err)
  
//   }

// };

// // function Delete Client : 
// /**
//  * methode => delete 
//  * @Route => /api/Client/deleteClient/:id_Apartment
//  * access => private
//  */

// // try {
// //   exports.DeleteClient = async (req, res) => {
// //     const id_Apartment = req.params.id_Apartment;
// //     const data = await Client.remove({
// //       where: {
// //         id_Apartment: id_Apartment,
// //       },
// //     });
// //     res.status(200).json({
// //       success: true,
// //       message: "Client deleted successfully",
// //       data: data,
// //     });
// //   };


// // } catch (error) {
// //   console.log(err);
// // }



// // function getupdate Client : 
// /**
//  * methode => put 
//  * @Route => /api/Client/updateClient:id_Apartment
//  * access => private
//  */
// //update Client:

// // exports. UpdateClient= async (req, res) => {
// //   const {residence,namberDClient} = req.body;
// //   const _id = req.params.id;
// //   if (!residence || !namberDClient) {
// //      res.status(400).json({ message: "please fill all fields !" });
// //   }
// //   // check for number if already exist
// //   const CheckClientUpdate = await Client
// //       .findOneAndUpdate({ _id,residence,namberDClient});
// //   if (CheckClientUpdate) {
// //      res.status(200).json({ message: "Client Updated Successfully !" });
// //   } else {
// //       res.status(400).json({ message: "Error  try again" });
// //   }
// // };

