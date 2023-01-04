import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentaireProduct from './detailsProducts/CommentaireProduct'
import AvisProduct from './detailsProducts/AvisProduct'
import ShowComments from './detailsProducts/showComments'





const ProductDetails = () => {

    const [product, setProduct] = useState('');
    const { id } = useParams()

    const handler = () => {
        const url = `http://localhost:8080/api/product/details/${id}`
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data.data);
                setProduct(res.data.data)

            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        handler()
    }, []);


    return (
        <>
            {/* <button onClick={handler}>button</button>  */}
            <div className="container grid grid-cols-2 gap-6" style={{ padding: '2rem' }}>
                <div>
                    <img src="../assets/images/products/product1.jpg" alt="product" className="w-full" />
                </div>
                <div>
                    <h2 className="text-3xl font-medium uppercase mb-2">{product.title_produit} </h2>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">{product.categoryIdCategorie} </span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">${product.prix_produit} </p>
                        <p className="text-base text-gray-400 line-through">${product.promotion_produit == true ? product.pourcentage_produit : null} </p>
                    </div>
                    <p className="mt-4 text-gray-600">{product.description_produit}</p>
                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <a href="#"
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <i className="fa-solid fa-bag-shopping"></i> Add to cart
                        </a>
                    </div>
                </div>
            </div>

            <div className='container '>
                <AvisProduct id={id} />
                <CommentaireProduct id={id} />
                <ShowComments id={id} />
            </div>
        </>
    )
}

export default ProductDetails