import React from 'react'
import{ useState, useEffect } from 'react'
import axios from 'axios'

const Client = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({ NumberPhone: '', name: '', cin: '',id_client:''})
  const { NumberPhone, name, cin ,id_client} = formData

  let [error, setError] = useState(true)

  const [Client, SetClient] = useState([])

  const URL = "http://localhost:8080/api/client/getAllclient"
  function GetClient() {
    return axios.get(URL)
    
  }

  function test_(){
    GetClient().then(response => {
      SetClient(response.data)
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

  const AddClientClick = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const UpdateClientClick = () => (
    setshowUpdateModal(!showUpdateModal)
  )

  const url = 'http://localhost:8080/api/client/createclient/'
  const data = { cin,NumberPhone,name}

  const AddClient = async (e) => {
  

    try {
      const res= await axios.post(url, data, { withCredentials: true });
      AddClientClick();
      GetClient().then(response => {
        // SetClient(response.data)
        console.log(response.data);
      })
    } catch (err) {
      console.log(err);
  
      setError(err)
    }
  }

  const SetClientData = async (NumberPhone, name, cin,id_client) => {
    formData.cin = cin
    formData.NumberPhone = NumberPhone
    formData.name = name
    formData.id_client = id_client
    UpdateClientClick()
  }

  const updateClient = async (id) => {

    const url = 'http://localhost:8080/api/client/updateclient/' + id

    try {
      const res = await axios.put(url, formData, { withCredentials: true });
      GetClient().then(response => {
        SetClient(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const deleteClient = async (id) => {
    const url = 'http://localhost:8080/api/client/deleteclient/' + id
    try {
      const res = await axios.delete(url, data, { withCredentials: true });
      GetClient().then(response => {
        SetClient(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
   
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={AddClientClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Client
                    </p>
                    

                    <div class="form-group">
                      <label for="exampleInputEmail1">NumberPhone</label>
                      <input type="text" name='NumberPhone' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter NumberPhone" />
                    </div>
                    
                    <div class="form-group">
                      <label for="exampleInputEmail1">cin</label>
                      <input type="text" name='cin' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter cin" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">name</label>
                      <input type="text" name='name' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter name" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddClient}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddClientClick}>Cancel</button>
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
                      Update Produit
                    </p>
                   
                    <div class="form-group">
                      <label for="exampleInputEmail1">cin</label>
                      <input type="text" name='cin' value={formData.cin} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter cin" />
                    </div>
                    {/* <div class="form-group">
                      <label for="exampleInputEmail1">NumberPhone</label>
                      <input type="text" name='NumberPhone' value={formData.NumberPhone} class="form-control rounded-3" placeholder="Enter NumberPhone" />
                    </div> */}
                      <div class="form-group">
                      <label for="exampleInputEmail1">NumberPhone</label>
                      <input type="text" name='NumberPhone' value={formData.NumberPhone} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter NumberPhone" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1"> name</label>
                      <input type="text" name='name' value={formData.name} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeClienty="emailHelp" placeholder="Enter name" />
                    </div>

                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={updateClient(formData.id_client)}>Update</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={UpdateClientClick}>Cancel</button>
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
                <th scope="col">cin</th>
                  <th scope="col">NumberPhone</th>
                  <th scope="col">name</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Client.map(data => (
                  <tr>
                    <td>{data.cin}</td>
                    <td>{data.NumberPhone}</td>
                    <td>{data.name}</td>
                 
                    <td>
                      <button class="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute" onClick={() => SetClientData(data.NumberPhone, data.cin, data.name, data.id_client)}>Update</button>
                    </td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => deleteClient(data.id_client)} >Delete</button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {Client == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Client
