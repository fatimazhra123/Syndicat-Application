import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({size}) => {
    // const [show, setShow] = useState(true);
    const icon = <FontAwesomeIcon icon="fa-regular fa-bag-shopping" />

    return (
        <>
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link to="/">
                        <img src="" alt="Logo" className="w-32"/>
                    </Link>

                    <Link to="home" className="text-Dark-100 hover:text-white transition">Home</Link>
                    <Link to="#" className="text-Dark-200 hover:text-white transition">Shop</Link>
                    <Link to="#" className="text-Dark-200 hover:text-white transition">About us</Link>
                    <Link to="#" className="text-Dark-200 hover:text-white transition">Contact us</Link>

                    
                </div>
            </header>
        </>
    )
}

export default Header