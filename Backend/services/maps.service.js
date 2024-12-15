const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API; 
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK' && response.data.results.length > 0) {
            
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            
            throw new Error(`Error fetching coordinates: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error occurred while fetching coordinates:', error.message || error);
        throw error; 
    }
};

module.exports.getDistanceTime = async(origin, destination) =>{
    if(!origin || !destination){
        throw new Error('Origin and Destination are required')
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&key=${apiKey}`;

    try{

        const response = await axios.get(url);

        if (response.data.status === 'OK' && response.data.results.length > 0) {
            
            if(response.data.rows[0].element[0].status === 'ZERO_RESULTS'){
                throw new Error('NO routes Found');
            }
            
            return response.data.rows[0].element[0];
        }else{
            throw new Error(`Error fetching coordinates: ${response.data.status}`);
        }

    }catch (error) {
        console.error('Error occurred while fetching coordinates:', error.message || error);
        throw error; 
    }

};
