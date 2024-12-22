import React,{ useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

function CaptainDetails() {

    const { captain } = useContext(CaptainDataContext)


    return (
        <div className=''>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-x-2'>
                    <img className='h-20' src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-vector-png-image_6985292.png" alt="" />
                    <div>
                        <h2 className='font-medium capitalize'> {captain.fullname.firstname + " " + captain.fullname.lastname}</h2>
                        <p className='text-gray-500 text-sm'>Basic level</p>
                    </div>
                </div>
                <div>
                    <h4 className='font-medium'>₹ 500.20</h4>
                    <p className='text-gray-500 text-sm'>Earned</p>
                </div>
            </div>
            <div className='flex h-28 items-center justify-center gap-x-5 bg-gray-100 rounded-lg w-full'>
                <div className='text-center'>
                    <i className="ri-time-line text-2xl font-thin text-gray-600 "></i>
                    <h4 className='text-lg font-medium'>10.2</h4>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="ri-speed-up-line text-2xl font-thin text-gray-600 "></i>
                    <h4 className='text-lg font-medium'>30 km</h4>
                    <p className='text-sm text-gray-600 '>Total Distance</p>
                </div>
                <div className='text-center'>
                    <i class="ri-sticky-note-add-line text-2xl font-thin text-gray-600 "></i>
                    <h4 className='text-lg font-medium'>30 km</h4>
                    <p className='text-sm text-gray-600 '>Total Distance</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
