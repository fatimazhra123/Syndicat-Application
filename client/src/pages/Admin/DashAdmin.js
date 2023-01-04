import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DashAdmin = () => {

  const [Products, SetProducts] = useState()
  const [Categories, SetCategories] = useState()
  const [Comments, SetComments] = useState()
  const [CodePromos, SetCodePromos] = useState()


  const URL_1 = "http://localhost:8080/Product/getAllProduct"
  function GetProducts() {
    return axios.get(URL_1)
  }

  GetProducts().then(response => {
    SetProducts((response.data).length)
  })

  //
  const URL_2 = "http://localhost:8080/categorie/getAllCategorie"
  function GetCategories() {
    return axios.get(URL_2)
  }

  GetCategories().then(response => {
    SetCategories((response.data).length)
  })

  //
  const URL_3 = "http://localhost:8080/commentaire/"
  function GetComments() {
    return axios.get(URL_3)
  }

  GetComments().then(response => {
    SetComments((response.data).length)
  })

  //
  const URL_4 = "http://localhost:8080/promocode"
  function GetCodePromos() {
    return axios.get(URL_4)
  }

  GetCodePromos().then(response => {
    SetCodePromos((response.data).length)
  })



  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Dashboard</p>
          </div>
          <div class="divs1 mt-3">
            <div class="divs2 card">
              <i class=""></i>
              <p>
                Products
              </p>
              <p class="num">
                {Products}
              </p>
            </div>
            <div class="divs2 card" id="wst1">
              <i class=""></i>
              <p>
                Categories
              </p>
              <p class="num">
                {Categories}
              </p>
            </div>
            <div class="divs2 card" id="wst2">
              <i class=""></i>
              <p>
                Code Promos
              </p>
              <p class="num">
                {CodePromos}
              </p>
            </div>
            <div class="divs2 card">
              <i class=""></i>
              <p class="">
                Comments
              </p>
              <p class="num">
                {Comments}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DashAdmin
