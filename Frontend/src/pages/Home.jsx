import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmedRidePanelRef = useRef(null)
    const waitingForDriverRef = useRef(null) 
    const vehicleFoundRef = useRef(null) 
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)



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
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        }else{
            gsap.to(panelRef.current,{
                visibility: 'collapse',
                height: '0%',
                padding:0
            })
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

    useGSAP(function(){
        if(confirmedRidePanel){
            gsap.to(confirmedRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmedRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmedRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriver])



    return (
        <div className='h-screen relative overflow-hidden '>
            <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
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
                        <div>
                            <div className='line absolute h-[10px] w-[10px]  top-[38%] left-[35px] bg-gray-600'></div>
                            <div className='line absolute h-[50px] w-1 top-[43%] left-[38px] bg-gray-600'></div>
                            <div className='line absolute h-[10px] w-[10px] top-[68%] left-[35px] bg-gray-600'></div>
                        </div>
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
            <div ref={vehiclePanelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel}  setVehiclePanel={setVehiclePanel}/>
            </div >
            <div ref={confirmedRidePanelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={vehicleFoundRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div ref={waitingForDriverRef} className='fixed  w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver waitingForDriver={waitingForDriver} />
            </div>
            
        </div>
    )
}

export default Home
