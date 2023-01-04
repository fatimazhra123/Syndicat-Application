import axios from 'axios'
import React, { useState } from 'react'
import Submit from '../../components/Submit'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/Input'
import Swal from 'sweetalert2'



const ResetPassword = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ password: '', password2: '' })
    const { password, password2 } = formData
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const { token } = useParams()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const url = `http://localhost:8080/api/auth/resetPassword/${token}`
    const data = { password, password2 }

    const hundelSubmit = (e) => {
        e.preventDefault();
        if (formData.password.length == 0 || formData.password2.length == 0) {
            setError(true)
        }
        else if (formData.password != formData.password2) {
            setErrorPassword(true)
        }

        axios.post(url, data)
            .then((res) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.mess,
                    showConfirmButton: true
                })
                setTimeout(() => {
                    navigate('/login')
                }, 1500);
                console.log(res)
                setMessage(res.data.mess)
                // navigate('/message')

            }).catch((err) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: err.response.data,
                    showConfirmButton: true
                })
                console.log(err);
                setMessage(err.response.data.message)
            })
    }

    return (
        <>
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <form onSubmit={(e) => hundelSubmit(e)}>
                        <div className="space-y-2">
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
                        <Submit />
                    </form>
                </div>
            </div>
        </>
    )
}



export default ResetPassword