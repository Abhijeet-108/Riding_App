import React from 'react'

function LocationPanel(props) {

    const locations = [
        'Mb-64 Near Alt healthy kitchen white building',
        'The Alt healthy kitchen, Mahishbathan',
        'Howrah railway station, Howrah',
        'Techno main salt lake, sector V'
    ]

    return (

        <div className=''>
            {
                locations.map(function(elem, idx){
                    return <div
                    key={idx}
                    onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}
                    className='flex items-center mb-2 gap-3 active:border-2 p-2 rounded-xl'>
                    <h2 className='bg-[#eee]  flex items-center justify-center h-10 w-10 rounded-full'><i class="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium text-gray-600'>{elem}  </h4>
                </div>
                })
            }
            
        </div>
    )
}

export default LocationPanel
