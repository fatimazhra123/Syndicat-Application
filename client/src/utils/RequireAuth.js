import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import Unauthorized from '../components/Unauthorized'

const RequireAuth = ({ Roles }) => {


    
    const location = useLocation()
    const role = localStorage.getItem('role')
    const email = localStorage.getItem('email')
    console.log(email);
    console.log(role);



    if (!(role && email)) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }


    if (Roles.indexOf(role) < 0) {
        return <Unauthorized />;
    }
   

    return <Outlet />;


}

export default RequireAuth