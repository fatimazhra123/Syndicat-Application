import React, { useState } from 'react'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate, useLocation } from 'react-router-dom'








const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const [error, setError] = useState(false)
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
    // setError(inputValidation(values));

    if (formData.email.length == 0 || formData.password.length == 0) {
      setError(true)
    }

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(JSON.stringify(res?.data))
      console.log(res);
      const roles = res?.data?.role
      const id_user = res?.data?.id

      localStorage.setItem('id', id_user)
      localStorage.setItem('role', roles)
      localStorage.setItem('email', email)
      navigate(from, { replace: true });

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
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
            <p className="text-gray-600 mb-6 text-sm">
                welcome back customer
            </p>
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
            <Link style={{ fontSize: '14px', float: 'right', color: 'red' ,padding: '10px'}} to='/forgetPassword' >Forgot password</Link>
            <Submit />
          </form>
          
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-4 flex gap-4">
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>
            

            <p className="mt-4 text-center text-gray-600">Don't have account? <Link to="/register" className="text-primary">Register now</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login