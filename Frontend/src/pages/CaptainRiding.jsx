import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'


function CaptainRiding() {

    const finishRideRef = useRef(null)
    const [finishRide, setFinishRide] = useState(false)

    useGSAP(function(){
        if(finishRide){
            gsap.to(finishRideRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(finishRideRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[finishRide])

    return (
        <div>
            <div className='h-screen relative overflow-hidden'>
                <div className=''>
                    <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    <Link to='/captainhome' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                        <i className="text-lg font-medium ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className='h-4/5'>
                    <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
                </div>
                <div 
                onClick={()=>{
                    setFinishRide(true)
                }}
                className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-300'>
                    <h5 className='p-1 text-center w-[93%] absolute top-0'  onClick={() => {}}>
                        <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
                    </h5>
                    <h4 className='text-xl font-semibold'>4 KM away</h4>
                    <button className='flex items-center justify-center h-12 rounded-xl w-1/2 bg-green-600 text-white text-center mt-2'>Complete Ride</button>
                </div>
                <div ref={finishRideRef}  className='fixed h-screen w-full z-10 bottom-0 bg-white translate-y-full px-3 py-6'>
                    <FinishRide setFinishRide={setFinishRide} />
                </div>

            </div>
        </div>
    )
}

export default CaptainRiding
