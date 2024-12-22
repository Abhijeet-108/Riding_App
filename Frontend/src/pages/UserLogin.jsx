import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status === 200){
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token', data.token)

            navigate('/home')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <div className='flex justify-center items-center'>
                    <img className='w-16 mb-4 ' src="https://static-00.iconduck.com/assets.00/uber-icon-256x256-oa74xrkk.png" alt="" />
                </div>
                <h2 className='text-2xl font-semibold mb-3 font-sans text-center antialiased'>Get Started with Uber</h2>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your Email <span className='text-red-700'>*</span></h3>
                    <input 
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value)
                    }}
                    className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder: text-base'
                    type="email" 
                    required 
                    placeholder='name@example.com'
                    />
                    <h3 className='text-lg font-medium mb-2'>Enter your password <span className='text-red-700'>*</span></h3>
                    <input
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                    className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full' 
                    type="password"
                    required 
                    placeholder='******'
                    />
                    <button className='flex items-center justify-center mb-3 h-12 rounded-xl w-full bg-black text-white text-center mt-4'>Login</button>

                    <p className='text-center'>New User? <Link to='/usersignup' className='text-blue-500'>Create a new account</Link></p>

                </form>
            </div>

            <div className='mt-2'>
            <Link to='/captainlogin' className='flex items-center justify-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:tetx-base'>Sign in  as captain</Link>

            </div>

            <footer>
                <p className='text-xs text-gray-400'>By proceeding, you consent to receiving calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </footer>
            
        </div>
    )
}

export default UserLogin
