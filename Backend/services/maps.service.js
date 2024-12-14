const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API; // Ensure this is set in your environment variables
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
