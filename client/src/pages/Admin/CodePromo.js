import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideBar from '../../components/Admin/SideBar'

const CodePromo = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({ code_promo: '', pourcentage_promo: '', date_expiration: '', id_promos: '' })
  const { code_promo, pourcentage_promo, date_expiration, id_promos } = formData

  let [error, setError] = useState(true)

  const [PromoCodes, SetPromoCodes] = useState([])

  const URL = "http://localhost:8080/promocode"
  function GetCodePromos() {
    return axios.get(URL)
  }

  function test_(){
    GetCodePromos().then(response => {
      SetPromoCodes(response.data)
    })
  }

  useEffect(() => {
    test_()
  }, [])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const AddPromoClick = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const UpdatePromoClick = () => (
    setshowUpdateModal(!showUpdateModal)
  )

  const url = 'http://localhost:8080/PromoCode/AddPromoCode'
  const data = { code_promo, pourcentage_promo, date_expiration }

  const AddCodePromo = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      AddPromoClick();
      GetCodePromos().then(response => {
        SetPromoCodes(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const SetCodePromoData = async (code, discount, date, id) => {
    formData.code_promo = code
    formData.pourcentage_promo = discount
    formData.date_expiration = date
    formData.id_promos = id
    UpdatePromoClick()
  }


  const DeleteCodePromo = async (id) => {
    const url = 'http://localhost:8080/PromoCode/DeletePromoCode/' + id
    try {
      const res = await axios.post(url, data, { withCredentials: true });
      GetCodePromos().then(response => {
        SetPromoCodes(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <SideBar />
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Code promos</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
              <div class="d-flex">
                <p class="m-0">Show</p>
                <select class="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p class="m-0">Entities</p>
              </div>
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={AddPromoClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Code Promo
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Code Promo</label>
                      <input type="text" name='code_promo' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Code" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Discount rate</label>
                      <input type="number" name='pourcentage_promo' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter rate" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Expiry Date</label>
                      <input type="date" name='date_expiration' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter date" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddCodePromo}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddPromoClick}>Cancel</button>
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
                  <th scope="col">Code Promo</th>
                  <th scope="col">Discount rate</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {PromoCodes.map(data => (
                  <tr>
                    <td>{data.code_promo}</td>
                    <td>{data.pourcentage_promo + "%"}</td>
                    <td>{data.date_expiration}</td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => DeleteCodePromo(data.id_promos)} >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {PromoCodes == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default CodePromo
