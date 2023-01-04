import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <>
            {!role ? <Link to="/login" className="text-gray-200 hover:text-white transition">Login</Link> : <Link onClick={logout} to="/login" className="text-gray-200 hover:text-white transition">Logout</Link>}

        </>
    )
}

export default Logout