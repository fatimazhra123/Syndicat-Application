import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'





const Layout = () => {

    return (
        <>
            <Header/>
            <NavBar />
            <Outlet />
            <Footer />
           
        </>
    )
}

export default Layout