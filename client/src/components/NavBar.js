import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Home/Logout'
import axios from 'axios'




const NavBar = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getAllCategories()
    }, []);

    const url = 'http://localhost:8080/categorie/getAllCategorie'

    const getAllCategories = () => {
        try {
            axios.get(url)
                .then(response => {
                    setCategory(response.data)
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

            <nav className="bg-gray-800">
                <div className="container flex">

                    <div className="flex items-center justify-between flex-grow pl-12">
                       
                        <div className="flex items-center justify-between flex-grow pl-12">
                          
                            <Logout />
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar