import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const RequireAuth = () => {
    
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    console.log(email);
    console.log(token);


    if (!(token && email)) {
        return <Navigate to="/" replace/>
    }
   
    
    return <Outlet />;

}

export default RequireAuth