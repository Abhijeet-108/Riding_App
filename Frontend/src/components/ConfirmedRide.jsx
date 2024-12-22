import React from 'react'

function ConfirmedRide(props) {
    return (
        <div>
            <div className='flex items-center '>
                <h5 
                onClick={()=>{
                    props.setConfirmedRidePanel(false)
                }}
                className='absolute top-1 left-0 '><i className="ri-arrow-left-line text-2xl font-semibold"></i></h5>
                <h3 className='text-xl font-bold mb-5 absolute top-1 left-20'>Comfirming Your Ride</h3>
            </div>
            <div className='flex gap-5 flex-col items-center justify-center'>
                <div className='flex justify-center bg-blue-100 h-16 rounded-full w-40'>
                    <div className='bg-blue-200 h-14 rounded-full w-28 flex justify-center'>
                        <img 
                            className='h-16'
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" 
                        />
                    </div>
                </div>
                <div className='w-screen border-[1px] border-gray-400'></div>
                <div className='w-full'>
                    <div className='flex items-center mb-4'>
                        <i className="ri-map-pin-range-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>Pickup</h2>
                            <p className='text-sm text-gray-400'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                    <div className='flex items-center mb-4 pt-4'>
                        <i className="ri-square-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>destination</h2>
                            <p className='text-sm text-gray-400'> {props.destination} </p>
                        </div>
                    </div>
                    <div className='w-full border-[0.5px] border-gray-400 absolute left-8'></div>
                    <div className='flex items-center pt-4'>
                        <i className="ri-bank-card-fill"></i>
                        <div className='ml-4'>
                            <h2 className='font-semibold text-xl'>₹ {props.fare[props.vehicleType]}</h2>
                            <p className='text-sm text-gray-400'>cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{
                    props.setVehicleFound(true)
                    props.setConfirmedRidePanel(false)
                    props.createRide()
                }} className='flex items-center justify-center h-12 rounded-xl w-full bg-green-600 text-white text-center mt-2'>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default ConfirmedRide