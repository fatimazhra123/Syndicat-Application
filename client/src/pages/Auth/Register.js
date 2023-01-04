import React, { useState } from 'react'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


// import inputValidation from '../utils/InputValidation'





const Register = () => {
    const [formData, setFormData] = useState({ Username: '', email: '', password: '', password2: '', })
    const { Username, email, password, password2} = formData
    const [error, setError] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const navigate = useNavigate()
    // const MySwal = withReactContent(Swal)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const url = 'http://localhost:8080/api/auth/register'
    const data = { Username, email, password}

    const handleSubmit = (e) => {
        e.preventDefault();
        // setError(inputValidation(values));

        if (formData.Username.length === 0 || formData.email.length === 0 || formData.password.length === 0 || formData.password2.length === 0 ) {
            setError(true)
        }
        else if (formData.password != formData.password2) {
            setErrorPassword(true)
        }

        axios.post(url, data)
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
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(err.response.data)

            })
    }



    return (
        <>
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="space-y-2">
                            <div className='flex justify-between'>
                                <div>
                                    <div >
                                        < Input
                                            title='First Name'
                                            type='text'
                                            name='Username'
                                            placeholder='Enter Your First Name'
                                            onChange={onChange}
                                            value={Username}
                                        />
                                    </div>
                                    {error && formData.Username.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> first Name can not be empty</p> : ''}
                                </div>
                            </div>
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
                            <div className='flex justify-between'>
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
                                <div>
                                    <div>
                                        < Input
                                            title='Confirme Password'
                                            type='password'
                                            name='password2'
                                            placeholder='*******'
                                            onChange={onChange}
                                            value={password2}
                                        />
                                    </div>
                                    {error && formData.password2.length <= 0 ? <p className='m-0' style={{ 'color': 'red', fontSize: '12px' }}> Confirme password can not be empty</p> : ''}
                                    {errorPassword ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password is not match</p> : ''}
                                </div>
                            </div>
                          
                          
                        </div>

                        <Submit />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register