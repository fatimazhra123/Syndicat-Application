import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

function UpdateClient() {


  
    const [name, setName] = useState('')
    const [cin, setCin] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [data, setData] = useState({})



    const id = useParams();

    const navigate = useNavigate();

    const url = `http://localhost:8080/api/client/updateClient/${id.id}`
    const datas= {name, cin, numberPhone}

    const updateClient =(e) => {
        e.preventDefault()

        // if (name.length == 0  email.length == 0  password.length == 0 || password2.length == 0) {
        //     setError(true)
        //   }

        axios.put(url,datas)
        .then(res => {
            console.log(res.data.message);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false
            })
            navigate('/dashboard/client')
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const API_UPDATE = `http://localhost:8080/api/client/getClientById/${id.id}`
        console.log(API_UPDATE);
        axios.get(API_UPDATE)
            .then(res => {
                console.log(res.data);
                setCin(res.data.cin)
                setName(res.data.name)
                setNumberPhone(res.data.NumberPhone)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">

                    <form action className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" onSubmit={(e) => updateClient(e)}>
                        <div>
                            <label htmlFor="NameResidence" className="text-sm font-medium text-black">Name Client</label>
                            <div className="relative mt-1">
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" placeholder='enter your name' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Cin</label>
                            <div className="relative mt-1">
                                <input type="text" onChange={(e) => setCin(e.target.value)} value={cin} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Phone </label>
                            <div className="relative mt-1">
                                <input type="text" onChange={(e) => setNumberPhone(e.target.value)} value={numberPhone} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
                            </div>
                        </div>
                        <button type="submit" className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white"  style={{ background:"purple"}}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateClient