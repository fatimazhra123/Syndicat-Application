import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jspdf from 'jspdf'
import { Link } from 'react-router-dom'



function PaiementsPage() {
  const [showAddModal, setshowAddModal] = useState(false);
  const [formData, setFormData] = useState({ amount: '', date: '', namberDappartement: '', cin: '' })
  const { amount, date, namberDappartement, cin } = formData

  let [error, setError] = useState(true)

  const [Paiement, SetPaiement] = useState([])


 
  const URL = "http://localhost:8080/api/payement/getAllPayement"
  function GetPaiement() {
    axios.get(URL)
      .then(response => {
        console.log(response);
        SetPaiement(response.data)
      })
  }
useEffect(() => {
  GetPaiement()
  }, [])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const AddPaiementClick = () => {
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const url = 'http://localhost:8080/api/payement/createPayement'
  const data = { namberDappartement, amount, date, cin }

  const AddPaiement = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      AddPaiementClick();
      GetPaiement().then(response => {
        // SetPaiement(response.data)
        console.log(response.data);
      })
    } catch (err) {
      console.log(err);

      setError(err)
    }
  }


  const deletePaiement = async (id) => {
    const url = 'http://localhost:8080/api/payement/deletePayement/' + id
    try {
      const res = await axios.delete(url, data, { withCredentials: true });
      GetPaiement().then(response => {
        SetPaiement(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
    }
  }
  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">paiements pages</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-purple px-3 text-blod Button_ajoute" onClick={AddPaiementClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Paiement
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">namberDappartement</label>
                      <input type="" name='namberDappartement' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="Enter namberDappartement" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">cin</label>
                      <input type="text" name='cin' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="Enter cin" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">amount</label>
                      <input type="text" name='amount' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="Enter amount" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">date</label>
                      <input type="date" name='date' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="Enter date" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddPaiement}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddPaiementClick}>Cancel</button>
                    </div>
                    <p className='text-center text-danger'>
                      {error}
                    </p>
                  </form>
                </div>
              }
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">namberDappartement</th>
                  <th scope="col">amount</th>
                  <th scope="col">date</th>
                  <th scope="col">cin</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Paiement.map(data => (
                  <tr>
                    <td>{data.namberDappartement.namberDappartement}</td>
                    <td>{data.amount}</td>
                    <td>{data.date}</td>
                    <td>{data.cin.cin}</td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => deletePaiement(data._id)} >Delete</button>
                    </td>
                    <td>
                          <button className="btn bg-dark  p-1 px-2 text-white Button_ajoute"><Link to={`/dashboard/PdfPaiment/${data._id}`}>Facture</Link></button>
                    </td>
                    <td>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {Paiement == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default PaiementsPage