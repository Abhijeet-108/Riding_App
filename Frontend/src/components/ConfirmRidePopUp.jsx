import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ConfirmRidePopUp(props) {

    const [otp, setOtp] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
    }

    return (
        <div className=''>
            <div className='flex items-center'>
                <h5 
                onClick={()=>{
                    props.setConfirmRidePopUp(false)
                }}
                className='absolute top-1 left-0 '><i className="ri-arrow-left-line text-2xl font-semibold"></i></h5>
                <h3 className='text-xl font-bold mb-5 absolute top-1 flex items-center justify-center w-full'>#258414</h3>
            </div>
            <div className='flex items-center w-full justify-between rounded-xl bg-slate-200 p-1 mb-1'>
                <div className='flex items-center justify-start gap-x-2'>
                    <img className='h-14 rounded-full' src="https://img.pikbest.com/png-images/20241202/boy-profile-photo-cartoon_11152300.png!f305cw" alt="" />
                    <h2 className='font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>2.5 km</p>
                </div>
            </div>
            <div className='flex gap-5 flex-col items-center justify-center'>
                
                <div className='w-screen border-[1px] border-gray-400'></div>
                <div className='w-full'>
                    <div className='flex items-center mb-4'>
                        <i className="ri-map-pin-range-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>Pickup</h2>
                            <p className='text-sm text-gray-400'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                    <div className='flex items-center mb-4 pt-4'>
                        <i className="ri-square-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>Destination</h2>
                            <p className='text-sm text-gray-400'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                    <div className='flex items-center pt-4'>
                        <i className="ri-bank-card-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>₹ {props.ride?.fare}</h2>
                            <p className='text-sm text-gray-400'>cash</p>
                        </div>
                    </div>
                </div>
                
                <div className='w-full'>
                    <form 
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input
                        value={otp} 
                        onChange={(e)=>{
                            setOtp(e.target.value)
                        }}
                        required type="number" inputMode='numeric' maxLength={4} pattern='\d{4}' placeholder='Enter OTP' className='bg-[#eeeeee] my-3 rounded-lg px-12 py-2 border w-full text-base placeholder: text-sm'/>
                        <div className='flex w-full gap-x-1'>
                            <Link to={'/captainriding'} onClick={()=>{
                                
                            }} className='flex items-center justify-center h-12 rounded-xl w-1/2 bg-green-600 text-white text-center mt-2'>
                                Confirm
                            </Link>
                            <button onClick={()=>{
                                props.setConfirmRidePopUp(false)
                                props.setRidePopUp(false)
                            }} className='flex items-center justify-center h-12 rounded-xl w-1/2 bg-red-600 text-white text-center mt-2'>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
