const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query; 

    try {
        
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates); 
    } catch (error) {
        console.error('Error fetching coordinates:', error.message || error);
        res.status(404).json({ message: 'Coordinates not found. Please check the address and try again.' });
    }
};
