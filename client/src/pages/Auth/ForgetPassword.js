import axios from 'axios'
import React, { useState } from 'react'
import Submit from '../../components/Submit'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Swal from 'sweetalert2'




const ForgetPassword = () => {
  const navigate = useNavigate()
  // const [email, setEmail] = useState('')
  const [mess, setMess] = useState('')
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({ email: '' })
  const { email } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const url = 'http://localhost:8080/api/auth/forgetpassword'
  const data = { email }

  const hundelSubmit = (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      setError(true)
    }

    axios.post(url, data, { withCredentials: true })
      .then((res) => {
        console.log(res)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.mess,
          showConfirmButton: true
      })
      setTimeout(() => {
          navigate('/login')
      }, 3000);

      }).catch((err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.response.data,
          showConfirmButton: true,
          timer : 1500
      })
     
        console.log(err);
        setMess(err.response.data)
      })
  }

  return (
    <>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <form onSubmit={(e) => hundelSubmit(e)}>
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
            </div>
            <Submit />

          </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword