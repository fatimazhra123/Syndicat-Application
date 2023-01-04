import React, { useState, useEffect } from 'react'
import CodePromo from './CodePromo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Panier = () => {
const arr = []
const [data, setData] = useState([]);
// const [msg, setMsg] = useState(initialState);

useEffect(() => {
  setData(JSON.parse(localStorage.getItem('panier')))

}, []);

// if (localStorage.length === 0) {
//   console.log(true);
// }else{
//   console.log(false);
// }

console.log(Array.isArray(data));
// console.log(push(data));
// data.forEach((value) => {
  // const exist = data.find( (value) => value.id_produit === value.id_produit )

 
  // console.log(exist);
// })

console.log(data);

  return (
    <>
      
      <div className="container p-8 mx-auto mt-12">
        <div className="w-full overflow-x-auto">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">Shopping Cart 3 item</h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Image</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
              </tr>
            </thead>
            {data && data.map(e =>
              <tbody>
                <tr key={e.id_produit}></tr>
                <tr>
                  <td>
                    <div className="flex justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        className="object-cover h-28 w-28 rounded-2xl"
                        alt="image"
                      />
                    </div>
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <div className="flex flex-col items-center justify-center">
                      <h3>{e.title_produit} </h3>
                    </div>
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <div>
                      <button className=' px-5 text-[25px]'>-</button>
                      <input
                        type="text"
                        name="qty"
                        value="2"
                        className="w-12 text-center bg-gray-100 outline-none"
                      />
                      <button className=' px-5 text-[25px]'>+</button>
                    </div>
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">$ {e.prix_produit} </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <button>
                    <i class="fa-solid fa-trash-can"></i> Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            )}
          </table>

          <CodePromo />
          <div className="mt-4">
            <div className="py-4 rounded-md shadow">
              <h3 className="text-xl font-bold text-blue-600">Order Summary</h3>
              <div className="flex justify-between px-4">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$35.25</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Discount</span>
                <span className="font-bold text-red-600">- $5.00</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Sales Tax</span>
                <span className="font-bold">$2.25</span>
              </div>
              <div
                className="flex items-center justify-between px-4 py-2 mt-3 border-t-2" >
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">$37.50</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-fullpy-2text-center text-whitebg-blue-500rounded-mdshadowhover:bg-blue-600" >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Panier