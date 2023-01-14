import React, { useState, useContext } from 'react'
import Input from '../auth/Input'
import Submit from '../auth/Submit'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import signiiiii from "../../assets/images/signiiiii.png";
import { UserContext } from '../../userContext/UserContext'
// import { showMessage } from './utiles/showMessage';











const Login = () => {
  const {setAuth} = useContext(UserContext)
  
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const [error, setError] = useState(false)
  // const [noErr, setNoErr] = useState(true)
  const [errorPassword, setErrorPassword] = useState(false)
  const [result, setResult] = useState('')

  const navigate = useNavigate()
  const location = useLocation();
  const from =  location.state?.from || '/';

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const url = 'http://localhost:8080/api/auth/login'
  const data = { email, password }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.length == 0 || formData.password.length == 0) {
      setError(true)
    }

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(res.data);
      setAuth(res.data)
      const token = res.data.token
      localStorage.setItem('email', email)
      localStorage.setItem('token' , token)
      navigate('/dashboard')
  

    } catch (err) {
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500
    })

    }

  }
  return (
    <>
      <div className='hero min-h-screen bg-base-200 bg-gray-50 px-20 py-8  shadow-xl  rounded-2xl border-2  animate__animated animate__zoomIn    border-gray-200 flex flex-col place-items-center'  style={{ backgroundImage: `url(${signiiiii})` }}>

<div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-100">
  <h2 className='text-center text-3xl font-bold text-dark'>Sign in</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-2">
              <div>
                < Input
                  title='Email'
                  type='email'
                  name='email'
                  placeholder='youremail.@gmail.com'
                  onChange={onChange}
                  value={email}

                />
              </div>
              {error && formData.email.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Email can not be empty</p> : ''}

              <div>
                <div>
                  < Input
                    title='Password'
                    type='password'
                    name='password'
                    placeholder='*******'
                    onChange={onChange}
                    value={password}
                  />
                </div>
                {error && formData.password.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password can not be empty</p> : ''}
              </div>
            </div>
          
            <Submit />
          </form>
          
        
            

          
        </div>
        {/* { noErr && <Navigate to='/dashboard' /> } */}
      </div>
    </>
  )
}

export default Login