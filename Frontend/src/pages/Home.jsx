import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)


    const submitHandler = (e) =>{
        e.preventDefault()
    } 

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                visibility: 'visible',
                height:'70%',
                padding: 20
                
            })
        }else{
            gsap.to(panelRef.current,{
                visibility: 'collapse',
                height: '0%',
                padding:0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        }else{
            gsap.to(panelCloseRef.current,{
                opacity: 0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

    return (
        <div className='h-screen relative overflow-hidden '>
            <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div 
            className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] bg-white p-5 relative'>
                    <h5 ref={panelCloseRef} onClick={()=>{
                        setPanelOpen(false)
                    }} className='opacity-0 absolute top-0 left-0'>
                        <i className="ri-arrow-down-wide-line text-xl"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler()
                    }}>
                        {/* <div>
                            <div className='line absolute h-[10px] w-[10px]  top-[38%] left-[35px] bg-gray-600'></div>
                            <div className='line absolute h-[50px] w-1 top-[43%] left-[38px] bg-gray-600'></div>
                            <div className='line absolute h-[10px] w-[10px] top-[68%] left-[35px] bg-gray-600'></div>
                        </div> */}
                        <input
                        onClick={()=>{
                            setPanelOpen(true)
                        }}
                        value={pickup}
                        onChange={(e)=>{
                            setPickup(e.target.value)
                        }}
                        className='bg-[#eeeeee] my-3 rounded-lg px-12 py-2 border w-full text-base placeholder: text-sm'
                        type="text" 
                        placeholder='Add a pickup location' 
                        />
                        <input
                        onClick={()=>{
                            setPanelOpen(true)
                        }} 
                        value={destination}
                        onChange={(e)=>{
                            setDestination(e.target.value)
                        }}
                        className='bg-[#eeeeee] mt-2 rounded-lg px-12 py-2 border w-full text-base placeholder: text-sm'
                        type="text" 
                        placeholder='Enter your destination' 
                        />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white '>
                    <LocationPanel setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
                <div className='flex items-center '>
                    <h5 
                    onClick={()=>{
                        setVehiclePanel(false)
                    }}
                    className='absolute top-1 left-0 '><i className="ri-arrow-left-line text-2xl font-semibold"></i></h5>
                    <h3 className='text-xl font-bold mb-5 absolute top-1 left-8'>Choose a Vehicle</h3>
                </div>
                <div className='flex active:border-2  active:border-black items-center justify-between p-2 rounded-xl mb-3'>
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
                <div className='flex active:border-2 active:border-black items-center justify-between p-2 rounded-xl mb-3'>
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
                <div className='flex active:border-2 active:border-black items-center justify-between p-2 rounded-xl mb-3'>
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
        </div>
    )
}

export default Home
