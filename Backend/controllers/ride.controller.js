const rideService = require('../services/ride.services');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const {sendMessageToSocketId} = require('../socket');
const rideModel = require('../models/ride.model');



module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        
        // Send response immediately
        res.status(201).json(ride);

        // Handle background tasks
        (async () => {
            try {
                const pickupCoordinates = await mapService.getAddressCoordinates(pickup);
                console.log('Pickup coordinates:', pickupCoordinates);
                const captainsInRadius = await mapService.getCaptainInRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);
                console.log('Captains in radius:', captainsInRadius);

                ride.otp= ""
                const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
                
                captainsInRadius.map(captain => {
                    sendMessageToSocketId(captain.socketId, {
                        event: 'new-ride',
                        data: rideWithUser
                    })
                });
                
            } catch (err) {
                console.error('Background task error:', err.message);
            }
        })();
    } catch (err) {
        console.error("Error creating ride:", err.message);
        return res.status(500).json({ message: err.message });
    }
};

module.exports.getFare = async(req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {  pickup, destination } = req.query;

    try{
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare); 
    }catch(err){
        console.error("Error fetching fare:", err.message); 
        return res.status(500).json({ message: err.message });
    }
};

module.exports.confirmRide = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try{
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })
        return res.status(200).json(ride); 
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}
