import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';

const Categories = () => {

     
    const [categories, setCategories] = useState([]);


        useEffect(() => {
             const API_URL_CATEGORIES = 'http://localhost:8080/categorie/getAllCategorie'
        try {
            axios.get(API_URL_CATEGORIES).then(res => {
                setCategories(res.data)
            })
        } catch (error) {
            console.log(error);
        }
        }, [])
       
    
    return (
        <>
            <div className="container py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
                <div className="grid grid-cols-3 gap-3">
                    {categories.map(categorie =>
                        <div className="relative rounded-sm overflow-hidden group">
                            <img src="assets/images/category/category-1.jpg" alt="category 1" className="w-full" />
                            <a href="#"
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{categorie.categorie}</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Categories