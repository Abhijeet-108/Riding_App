import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Riding() {
    return (
        <div className='h-screen relative overflow-hidden'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2 '>
                <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between '>
                    <div className=''>
                        <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                        <img className='h-20 absolute left-4 top-[55%] rounded-full' src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-vector-png-image_6985292.png" alt="" />
                    </div>
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>Pramod</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>Br 08 b 8956</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                        <h1 className='text-lg font-semibold'> 785963 </h1>
                    </div>
                </div>
                <div className='flex gap-2 justify-between flex-col items-center mt-3'>
                    <div className='w-full'>
                        
                        <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                        <div className='flex items-center mb-4 pt-4'>
                            <i className="ri-square-fill"></i>
                            <div className='ml-4'>
                                <h2 className='font-semibold text-xl'>Howrah Railway Station</h2>
                                <p className='text-sm text-gray-400'>Howrah, West Bengal</p>
                            </div>
                        </div>
                        <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                        <div className='flex items-center pt-4'>
                            <i className="ri-bank-card-fill"></i>
                            <div className='ml-4'>
                                <h2 className='font-semibold text-xl'>₹ 192.20</h2>
                                <p className='text-sm text-gray-400'>cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='flex items-center justify-center h-12 rounded-xl w-full bg-green-600 text-white text-center mt-2 mb-3'>Make a payment</button>
            </div>
        </div>
    )
}

export default Riding
