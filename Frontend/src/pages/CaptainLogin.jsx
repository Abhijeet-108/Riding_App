import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

function CaptainLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {captain , setCaptain} = React.useContext(CaptainDataContext)

    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();
        const CaptainData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, CaptainData)

        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captainhome')
        }

        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <div className='flex justify-center items-center'>
                    <img className='w-16 mb-4 ' src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="" />
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

                    <p className='text-center'>Join a fleet? <Link to='/captainsignup' className='text-blue-500'>Register as a Captain</Link></p>

                </form>
            </div>

            <div className='mt-2'>
            <Link to='/userlogin' className='flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:tetx-base'>Sign in  as User</Link>

            </div>

            <footer>
                <p className='text-xs text-gray-400'>By proceeding, you consent to receiving calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </footer>
        
        </div>
    )
}

export default CaptainLogin
