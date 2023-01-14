import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


function UpdateAppartement() {


    const [data, setData] = useState({})
    const [residence, setResidence] = useState("")
    const [namberDappartement, setNamberDappartement] = useState("")
    
    const id = useParams();

    const navigate = useNavigate();

    const url = `http://localhost:8080/api/Appartement/updateAppartement/${id.id}`
    const datas= {residence, namberDappartement}

    const updateAppartement =(e) => {
        console.log(url);
        e.preventDefault()

        axios.put(url,datas)
        .then(res => {
            console.log(res);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer : 1500
            })
            navigate('/dashboard/Appartement')
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const API_UPDATE = `http://localhost:8080/api/Appartement/appartement/${id.id}`
        console.log(API_UPDATE);
        axios.get(API_UPDATE)
            .then(res => {
                console.log(res.data);
                setResidence(res.data.residence)
                setNamberDappartement(res.data.namberDappartement)
             
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

        
            return (
                <>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
    
                        <form action className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" onSubmit={(e) => updateAppartement(e)}>
                            <div>
                                <label htmlFor="NameResidence" className="text-sm font-medium text-black">Name Résedance</label>
                                <div className="relative mt-1">
                                    <input type="text" onChange={(e) => setResidence(e.target.value)} value={residence} className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" placeholder='enter your name' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">namber Dappartement</label>
                                <div className="relative mt-1">
                                    <input type="text" onChange={(e) => setNamberDappartement(e.target.value)} value={namberDappartement} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
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

export default UpdateAppartement