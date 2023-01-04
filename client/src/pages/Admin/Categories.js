import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideBar from '../../components/Admin/SideBar'

const Catégorie = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({  categorie: '', id_categorie: '' })
  const {categorie,id_categorie } = formData

  let [error, setError] = useState(true)

  const [db, Setdb] = useState([])

  const URL = "http://localhost:8080/categorie/getAllCategorie"
  function GetCategorie() {
    return axios.get(URL)
  }

  function test_(){
    GetCategorie().then(response => {
      Setdb(response.data)
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

  const AddCategorieClick = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const UpdateCategorieClick = () => (
    setshowUpdateModal(!showUpdateModal)
  )

  const url = 'http://localhost:8080/categorie/add'
  const data = { categorie }

  const AddCategorie = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      AddCategorieClick();
      GetCategorie().then(response => {
        Setdb(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const SetCategorieData = async (categorie,id_categorie) => {
    formData.categorie = categorie
    formData.id_categorie = id_categorie
    UpdateCategorieClick()
  }

  const UpdateCategorie = async (id) => {

    const url = 'http://localhost:8080/categorie/edit/' + id

    try {
      const res = await axios.put(url, formData, { withCredentials: true });
      GetCategorie().then(response => {
        Setdb(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const DeleteCatégorie = async (id) => {
    const url = 'http://localhost:8080/categorie/delete/' + id
    try {
      const res = await axios.delete(url, data, { withCredentials: true });
      GetCategorie().then(response => {
        Setdb(response.data)
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
            <p class="">Categories</p>
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
              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={AddCategorieClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Categorie
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Categorie</label>
                      <input type="text" name='categorie' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Catégorie" />
                    </div>
                   
                  
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddCategorie}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddCategorieClick}>Cancel</button>
                    </div>
                    <p className='text-center text-danger'>
                      {error}
                    </p>
                  </form>
                </div>
              }
              {showUpdateModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Update Categorie
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Categorie</label>
                      <input type="text" name='Catégorie' value={formData.categorie} class="form-control rounded-3" placeholder="Enter catégorie" />
                    </div>
                  
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={UpdateCategorieClick(formData.id_categorie)}>Update</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={UpdateCategorie}>Cancel</button>
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
                  <th scope="col">Catégorie</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {db.map(data => (
                  <tr>
                    <td>{data.categorie}</td>
                  
                    <td>
                      <button class="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute" onClick={() => SetCategorieData(data.categorie, data.id_categorie)}>Update</button>
                    </td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => DeleteCatégorie(data.id_categorie)} >Delete</button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {db == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Catégorie
