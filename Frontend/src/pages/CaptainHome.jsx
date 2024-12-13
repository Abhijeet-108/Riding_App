import React from 'react'
import { Link } from 'react-router-dom'

function CaptainHome() {
    return (
        <div className='h-screen relative overflow-hidden'>
            <div className=''>
                <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-2/3 '>
                <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
            </div>
            <div className='h-1/3 p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <img className='h-20' src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-vector-png-image_6985292.png" alt="" />
                        <div>
                            <h2 className='font-medium'>Pramod Kumar</h2>
                            <p className='text-gray-500 text-sm'>Basic level</p>
                        </div>
                    </div>
                    <div>
                        <h4>₹ 500.20</h4>
                        <p>Earned</p>
                    </div>
                </div>
                <div className='flex h-28 items-center justify-center gap-x-5 bg-amber-400 rounded-lg w-full'>
                    <div className='text-center'>
                        <i className="ri-time-line text-2xl font-thin"></i>
                        <h4 className='text-lg font-medium'>10.2</h4>
                        <p className='text-sm text-gray-600 '>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="ri-speed-up-line text-2xl font-thin"></i>
                        <h4 className='text-lg font-medium'>30 km</h4>
                        <p className='text-sm text-gray-600 '>Total Distance</p>
                    </div>
                    <div className='text-center'>
                        <i class="ri-sticky-note-add-line text-2xl font-thin"></i>
                        <h4 className='text-lg font-medium'>30 km</h4>
                        <p className='text-sm text-gray-600 '>Total Distance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainHome
