import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainSignup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const { captain , setCaptain } = React.useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email: email,
            password: password,
            vehicle:{
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captainhome')
        }

        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
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
                    <h3 className='text-base font-medium mb-2'>Vehicle Information <span className='text-red-700'>*</span></h3>
                    <div className='flex gap-4 mb-4'>
                        <input 
                        required
                        className='bg-[#eeeeee]  rounded-lg px-4 py-2  border w-1/2 text-base placeholder: text-sm'
                        type="text" 
                        placeholder='Vehicle Color'
                        value={vehicleColor}
                        onChange={(e) => {
                            setVehicleColor(e.target.value)
                        }}
                        />
                        <input 
                        required
                        className='bg-[#eeeeee]  rounded-lg px-4 py-2  border w-1/2 text-base placeholder: text-sm'
                        type="text" 
                        placeholder='Vehicle Plate'
                        value={vehiclePlate}
                        onChange={(e) => {
                            setVehiclePlate(e.target.value)
                        }}
                        />
                        
                    </div>
                    <div className='flex gap-4 mb-4'>
                        <input 
                            required
                            className='bg-[#eeeeee]  rounded-lg px-4 py-2  border w-1/2 text-base placeholder: text-sm'
                            type="text" 
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select 
                            required
                            className='bg-[#eeeeee]  rounded-lg px-4 py-2  border w-1/2 text-base placeholder: text-sm'
                            type="text" 
                            placeholder='Vehicle type'
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motocycle">Moto</option>
                        </select>

                    </div>

                    <button className='flex items-center justify-center mb-3 h-12 rounded-xl w-full bg-black text-white text-center mt-4'>Create Captain Account</button>

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
