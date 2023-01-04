import React from 'react'
import Breadcrumb from '../components/Profile/Breadcrumb'
import InformationForm from '../components/Profile/InformationForm'
import SideBar from '../components/Profile/SideBar'

const ProfClient = () => {
  const role = localStorage.getItem('role')
  return (
    <>
        <Breadcrumb />

       {role ? <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <SideBar />
          <InformationForm /> 
        </div> :  <img style={{ maxWidth : '50%', margin : '0 auto' }} src={window.location.origin + '/assets/images/Safe-bro.png'} alt="logoMarhaba" />}
    </>
  )
}

export default ProfClient