import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'

function CaptainHome() {
    const ridePopUpRef = useRef(null) 
    const confirmRidePopUpRef = useRef(null)

    const [ridePopUp, setRidePopUp] = useState(true)
    const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
    const [ ride, setRide ] = useState(null)

    const { socket } = useContext(SocketContext)
    const { captain } = useContext(CaptainDataContext)

    useEffect(() => {
        socket.emit('join',{
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()
        
        // return () => clearInterval(locationInterval)
    },[])

    socket.on('new-ride', (data) => {

        setRide(data)
        setRidePopupPanel(true)

    })
    

    useGSAP(function(){
        if(ridePopUp){
            gsap.to(ridePopUpRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(ridePopUpRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[ridePopUp])

    useGSAP(function(){
        if(confirmRidePopUp){
            gsap.to(confirmRidePopUpRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePopUpRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePopUp])



    return (
        <div className='h-screen relative overflow-hidden'>
            <div className=''>
                <img className='w-16 mb-4 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captainlogin' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
            </div>
            <div className='h-2/5 p-4'>
                <CaptainDetails />
            </div>
            <div ref={ridePopUpRef} className='fixed  w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12'>
                <RidePopUp setRidePopUp={setRidePopUp} setConfirmRidePopUp={setConfirmRidePopUp} />
            </div>
            <div ref={confirmRidePopUpRef} className='fixed h-screen  w-full z-10 bottom-0   bg-white px-3 py-6 pt-12'>
                <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUp={setRidePopUp} />
            </div>

        </div>
    )
}

export default CaptainHome
