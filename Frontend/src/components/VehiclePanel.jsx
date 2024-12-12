import React from 'react'

function VehiclePanel(props) {
    return (
        <div>
            <div className='flex items-center '>
                <h5 
                onClick={()=>{
                    props.setVehiclePanel(false)
                }}
                className='absolute top-1 left-0 '><i className="ri-arrow-left-line text-2xl font-semibold"></i></h5>
                <h3 className='text-xl font-bold mb-5 absolute top-1 left-8'>Choose a Vehicle</h3>
            </div>
            <div
            onClick={() =>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanel(false)
            }}
            className='flex active:border-2  active:border-black items-center justify-between p-2 rounded-xl mb-3'>
                <img 
                className='h-12'
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
                <div className='m-2'>
                    <h4 className='font-medium text-lg'>UberGO <span><i class="ri-user-3-fill"></i> 4</span></h4>
                    <p className='text-gray-700 text-sm font-medium'>2 mins away <span>15:24</span></p>
                    <p className='text-gray-700 text-sm '>Affordable, compact rides</p>
                </div>
                <h2 className='font-bold text-xl'>₹ 192.20</h2>
            </div>
            <div 
            onClick={()=>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanel(false)
            }}
            className='flex active:border-2 active:border-black items-center justify-between p-2 rounded-xl mb-3'>
                <img 
                className='h-12'
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
                <div className='m-3'>
                    <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i> 1</span></h4>
                    <p className='text-gray-700 text-sm font-medium'>2 mins away <span>15:24</span></p>
                    <p className='text-gray-700 text-sm '>Affordable motocycle rides</p>
                </div>
                <h2 className='font-bold text-xl'>₹ 65.20</h2>
            </div>
            <div
            onClick={() =>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanel(false)
            }}
            className='flex active:border-2 active:border-black items-center justify-between p-2 rounded-xl mb-3'>
                <img 
                className='h-12'
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='m-3'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i class="ri-user-3-fill"></i> 3</span></h4>
                    <p className='text-gray-700 text-sm font-medium'>2 mins away <span>15:24</span></p>
                </div>
                <h2 className='font-bold text-xl'>₹ 118.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
