import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainSignup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
            fullname:{
                firstName:firstName,
                lastName:lastName
            },
            email: email,
            password: password
        })
        console.log(userData);
        setEmail('')
        setFirstName('')
        setLastName('')
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
                    <h3 className='text-base font-medium mb-2'>What's your FullName <span className='text-red-700'>*</span></h3>
                    <div className='flex gap-2 mb-5'>
                        <input 
                        className='bg-[#eeeeee]  rounded-lg px-4 py-2  border w-1/2 text-base placeholder: text-sm'
                        type="text" 
                        required 
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) =>{
                            setFirstName(e.target.value)
                        }}
                        />
                        <input 
                        className='bg-[#eeeeee]  rounded-lg px-4 py-2 border w-1/2 text-base placeholder: text-sm'
                        type="text"  
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) =>{
                            setLastName(e.target.value)
                        }}
                        />
                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your Email <span className='text-red-700'>*</span></h3>
                    <input 
                    className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder: text-sm'
                    type="email" 
                    required 
                    placeholder='name@example.com'
                    value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}
                    />
                    <h3 className='text-base font-medium mb-2'>Create your password <span className='text-red-700'>*</span></h3>
                    <input
                    className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full' 
                    type="password"
                    required 
                    placeholder='******'
                    value={password}
                        onChange={(e) =>{
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='flex items-center justify-center mb-3 h-12 rounded-xl w-full bg-black text-white text-center mt-4'>SignUp</button>

                    <p className='text-center'>Already have a account? <Link to='/captainlogin' className='text-blue-500'>Login</Link></p>

                </form>
            </div>


            <footer>
                <p className='text-xs text-gray-400 mb-3'>By proceeding, you consent to receiving calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </footer>
            
        </div>
    )
}

export default CaptainSignup
