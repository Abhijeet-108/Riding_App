import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')

    const [panelOpen, setPanelOpen] = useState(false)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) =>{
        e.preventDefault()
    } 

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%'
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%'
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelCloseRef.current,{
                height:'70%',
                opacity: 1
            })
        }else{
            gsap.to(panelCloseRef.current,{
                height:'0%',
                opacity: 0
            })
        }
    },[panelOpen])

    return (
        <div className='h-screen relative'>
            <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] bg-white p-6 relative'>
                    <h5 ref={panelCloseRef} onClick={()=>{
                        setPanelOpen(false)
                    }} className='opacity-0 absolute top-0 left-0'>
                        <i className="ri-arrow-down-wide-line text-xl"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler()
                    }}>
                        <div className='line absolute h-[15px] w-[15px] w-1 top-[38%] left-[35px] bg-slate-500'></div>
                        <div className='line absolute h-[60px] w-1 top-[43%] left-10 bg-slate-500'></div>
                        <div className='line absolute h-[15px] w-[15px] w-1 top-[66%] left-[35px] bg-slate-500'></div>
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
                <div ref={panelRef} className='h-[0] bg-white'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
