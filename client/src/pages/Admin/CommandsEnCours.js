import axios from 'axios'
import { useState , useEffect , } from 'react'


function CommandsEnCours() {

  // api get Command Info EN cours: 
  const [CommandInfo,SetCommandInfos] = useState([])

  const API_URL = "http://localhost:8080/api/admin/commands"

  function getCommandsInfos() {
      return axios.get(API_URL)
      }

      function myFunction(){
        getCommandsInfos().then(response => {
          SetCommandInfos(response.data)
          })
      }

useEffect(() => {
    myFunction()
  }, [])

// Style button :
  const style = {
        color: "green"
  }
  const button = {
      backgroundColor: "green",
      color: "white",
      padding: 6,
      borderRadius: 7,
  }
// --------- end button style

  // Consommmation API update Status Command : 

      function UpdateCommand(id) { 
        const API_URL_UPDATE = `http://localhost:8080/api/admin/command/update/${id}`;
        return axios.patch(API_URL_UPDATE , {}).then(res => {
          myFunction()()
        }).catch((err) => {
          console.log(err);
        })
      }
      
    return (
    <>
    <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Commands en cours</p>
          </div>            
          <div className="table-responsive card p-2">
            <table className="table table-striped Table_responsive">
              <thead>
                <tr className="rounded tr_table">
                  <th scope="col">Numéro du Commande</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Status</th>
                  <th scope="col">date De livraison</th>
                </tr>
              </thead>
              <tbody>
            {CommandInfo.map(command => (
          <tr>
            <td>{command.id_command}</td>
            <td>{command.quantity}</td>
            <td>{command.montant}</td>
            <td style={style}>{command.status}</td>
            <td>{command.date_livraison}</td>
            <td>
              <button style={button} onClick={() => {UpdateCommand(command.id_command)}}>Update Status Command</button></td>
          </tr>
        ))}
      </tbody>
            </table>
          </div>
          </>
  )
}

export default CommandsEnCours