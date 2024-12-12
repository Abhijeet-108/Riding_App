import React from 'react'

function WaitingForDriver(props) {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.waitingForDriver(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <div className='flex items-center justify-between'>
                <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='text-right'>
                <h2 className='text-lg font-medium capitalize'>Pramod</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>Br 08 b 8956</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                <h1 className='text-lg font-semibold'> 785963 </h1>
                </div>
            </div>

            <div className='flex gap-2 justify-between flex-col items-center mt-3'>
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
        </div>
    )
}

export default WaitingForDriver

