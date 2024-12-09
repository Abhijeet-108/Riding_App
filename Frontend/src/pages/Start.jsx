import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <div>
            <div className='bg-[url(https://plus.unsplash.com/premium_photo-1726743688205-ac8b03023306?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhbnNwb3J0YXRpb24lMjBjb25uZWN0aW9ufGVufDB8fDB8fHww)] h-screen pt-4 flex justify-between flex-col w-full'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            >
                <img className='w-28 ml-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
                <div className='bg-white py-5 px-4 pb-7'>
                    <h2 className='text-2xl font-bold mb-3 font-sans'>Get Started with Uber</h2>
                    <Link to='/userlogin' className='flex items-center justify-center h-12 rounded-xl w-full bg-black text-white text-center mt-4'>Continue <span className=''>-{'>'}</span> </Link>
                </div>
            </div>
        </div>
    )
}

export default Start
