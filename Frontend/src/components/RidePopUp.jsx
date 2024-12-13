import React from 'react'

function RidePopUp(props) {
    return (
        <div>
            <div className='flex items-center '>
                <h5 
                onClick={()=>{
                    props.setRidePopUp(false)
                }}
                className='absolute top-1 left-0 '><i className="ri-arrow-left-line text-2xl font-semibold"></i></h5>
                <h3 className='text-xl font-bold mb-5 absolute top-1 left-20'>New Ride Available</h3>
            </div>
            <div className='flex items-center w-full justify-between rounded-xl bg-slate-200 p-1 mb-1'>
                <div className='flex items-center justify-start gap-x-2'>
                    <img className='h-14 rounded-full' src="https://img.pikbest.com/png-images/20241202/boy-profile-photo-cartoon_11152300.png!f305cw" alt="" />
                    <h2 className='font-medium'>Abhi Kumar</h2>
                </div>
                <div>
                    <h4 className='font-medium'>₹ 192.20</h4>
                    <p className='text-gray-500 text-sm'>2.5 km</p>
                </div>
            </div>
            <div className='flex gap-5 flex-col items-center justify-center'>
                
                <div className='w-screen border-[1px] border-gray-400'></div>
                <div className='w-full'>
                    <div className='flex items-center mb-4'>
                        <i className="ri-map-pin-range-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>MB-64, Mahishbathan</h2>
                            <p className='text-sm text-gray-400'>The ALT healthy kitchen,Kolkata</p>
                        </div>
                    </div>
                    <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                    <div className='flex items-center mb-4 pt-4'>
                        <i className="ri-square-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>Howrah Railway Station</h2>
                            <p className='text-sm text-gray-400'>Howrah, West Bengal</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full gap-x-1'>
                    <button onClick={()=>{
                        props.setConfirmRidePopUp(true)
                    }} className='flex items-center justify-center h-12 rounded-xl w-1/2 bg-green-600 text-white text-center mt-2'>
                        Accept
                    </button>
                    <button onClick={()=>{
                        props.setRidePopUp(false)
                    }} className='flex items-center justify-center h-12 rounded-xl w-1/2 bg-gray-400 text-white text-center mt-2'>
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp