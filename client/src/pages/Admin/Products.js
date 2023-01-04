import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideBar from '../../components/Admin/SideBar'

const Product = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [showUpdateModal, setshowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({ title_produit: '', description_produit: '', image_produit: '', stock_produit: '' , prix_produit: '', pourcentage_produit: '',id_produit:''})
  const { title_produit, description_produit, image_produit ,stock_produit,prix_produit,pourcentage_produit,id_produit} = formData

  let [error, setError] = useState(true)

  const [Product, SetProduct] = useState([])

  const URL = "http://localhost:8080/Product/getAllProduct"
  function GetProduct() {
    return axios.get(URL)
    
  }

  function test_(){
    GetProduct().then(response => {
      SetProduct(response.data)
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

  const AddProductClick = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }

  const UpdateProductClick = () => (
    setshowUpdateModal(!showUpdateModal)
  )

  const url = 'http://localhost:8080/Product/add'
  const data = { image_produit,title_produit,description_produit,prix_produit,pourcentage_produit,stock_produit}

  const AddProduct = async (e) => {
    e.preventDefault();

    try {
      const res= await axios.post(url, data, { withCredentials: true });
      AddProductClick();
      GetProduct().then(response => {
        // SetProduct(response.data)
        console.log(response.data);
      })
    } catch (err) {
      console.log(err);
  
      setError(err)
    }
  }

  const SetProductData = async (title_produit, description_produit, image_produit, prix_produit,pourcentage_produit,stock_produit,id_produit) => {
    formData.image_produit = image_produit
    formData.title_produit = title_produit
    formData.description_produit = description_produit
    formData.prix_produit=prix_produit
    formData.pourcentage_produit=pourcentage_produit
    formData.stock_produit=stock_produit
    formData.id_produit = id_produit
    UpdateProductClick()
  }

  const updateProduct = async (id) => {

    const url = 'http://localhost:8080/Product/edit/' + id

    try {
      const res = await axios.put(url, formData, { withCredentials: true });
      GetProduct().then(response => {
        SetProduct(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
      error = err.response.data
      setError(err.response.data)
    }
  }

  const deleteProduct = async (id) => {
    const url = 'http://localhost:8080/Product/delete/' + id
    try {
      const res = await axios.delete(url, data, { withCredentials: true });
      GetProduct().then(response => {
        SetProduct(response.data)
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
            <p class="">Produits</p>
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
              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={AddProductClick}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Product
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">image_produit</label>
                      <input type="" name='image_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter image_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">title_produit</label>
                      <input type="text" name='title_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter title_produit" />
                    </div>
                  
                    <div class="form-group">
                      <label for="exampleInputEmail1">description_produit</label>
                      <input type="text" name='description_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter description_produit" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">prix_produit</label>
                      <input type="number" name='prix_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter prix_produit" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">pourcentage_produit</label>
                      <input type="number" name='pourcentage_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter pourcentage_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">stock_produit</label>
                      <input type="number" name='stock_produit' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter stock_produit" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddProduct}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddProductClick}>Cancel</button>
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
                      <label for="exampleInputEmail1">image_produit</label>
                      <input type="text" name='image_produit' value={formData.image_produit} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter image_produit" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">title_produit</label>
                      <input type="text" name='title_produit' value={formData.title_produit} class="form-control rounded-3" placeholder="Enter title_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1"> description_produit</label>
                      <input type="text" name='description_produit' value={formData.description_produit} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter description_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1"> prix_produit</label>
                      <input type="number" name='prix_produit' value={formData.prix_produit} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter prix_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1"> pourcentage_produit</label>
                      <input type="number" name='pourcentage_produit' value={formData.pourcentage_produit} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter pourcentage_produit" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1"> stock_produit</label>
                      <input type="number" name='stock_produit' value={formData.stock_produit} onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describeProducty="emailHelp" placeholder="Enter stock_produit" />
                    </div>

                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={updateProduct(formData.id_produit)}>Update</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={UpdateProductClick}>Cancel</button>
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
                <th scope="col">image_produit</th>
                  <th scope="col">title_produit</th>
                  <th scope="col">description_produit</th>
                  <th scope="col">prix_produit</th>
                  <th scope="col">pourcentage_produit</th>
                  <th scope="col">stock_produit</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Product.map(data => (
                  <tr>
                    <td>{data.image_produit}</td>
                    <td>{data.title_produit}</td>
                    <td>{data.description_produit}</td>
                    <td>{data.prix_produit}</td>
                    <td>{data.pourcentage_produit + "%"}</td>
                    <td>{data.stock_produit}</td>
                 
                    <td>
                      <button class="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute" onClick={() => SetProductData(data.title_produit, data.image_produit, data.description_produit, data.prix_produit, data.pourcentage_produit,data.stock_produit, data.id_produit)}>Update</button>
                    </td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => deleteProduct(data.id_produit)} >Delete</button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {Product == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Product
