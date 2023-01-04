import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'





const LayoutAdmin = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default LayoutAdmin