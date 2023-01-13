import React from 'react'
import{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Appartement = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({ residence: '', namberDappartement: ''})
  const { residence, namberDappartement, _id} = formData

  let [error, setError] = useState(true)

  const [Appartement, SetAppartement] = useState([])

  const URL = "http://localhost:8080/api/Appartement/getAllAppartement"
  function GetAppartements() {
    return axios.get(URL)
  }

  function test_(){
    GetAppartements().then(response => {
      SetAppartement(response.data)
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

  const AddAppartemnetClick = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const UpdateAppartementClick = () => (
    setshowUpdateModal(!showUpdateModal)
  )

  const url = 'http://localhost:8080/api/Appartement/createAppartement/'
  const data = { residence, namberDappartement}

  const AddAppartement = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      AddAppartemnetClick();
      GetAppartements().then(response => {
        SetAppartement(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const SetAppartementData = async (residence, namberDappartement, _id) => {
    formData.residence = residence
    formData.namberDappartement = namberDappartement
    formData._id= _id
    UpdateAppartementClick()
  }

  
  

  const DeleteAppartement = async (id) => {
    const url = 'http://localhost:8080/api/Appartement/deleteAppartement/' + id
    try {
      const res = await axios.delete(url, data, { withCredentials: true });
      GetAppartements().then(response => {
        SetAppartement(response.data)
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
            <p class="">Appartement</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-purple px-3 text-blod Button_ajoute" onClick={AddAppartemnetClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Appartement
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name Residence</label>
                      <input type="text" name='residence' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name " />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Appartement Number</label>
                      <input type="text" name='namberDappartement' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number" />
                    </div>

                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddAppartement}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddAppartemnetClick}>Cancel</button>
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
                  <th scope="col"> Name Residence</th>
                  <th scope="col">Appartement Number</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Appartement.map(data => (
                  <tr>
                    <td>{data.residence}</td>
                    <td>{data.namberDappartement}</td>
                    <td>
                    <Link to={`/dashboard/UpdateAppartement/${data._id}`}>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                    <button  className="group relative inline-block text-sm font-medium text-[#68B984] focus:outline-none focus:ring active:text-indigo-500">
                                        <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#68B984] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                                        <span className="relative block border border-current bg-white px-8 py-3">
                                            Update
                                        </span>
                                    </button>
                                </td>
                            </Link>
                    </td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => DeleteAppartement(data._id)} >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {Appartement == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Appartement
