'use strict'

const express           = require('express');
const hotel             = require('../controllers/hotel');
const hotels            = require('../controllers/hoteles');
const location          = require('../controllers/ubicacion');
const api               = express.Router();


//Rutas publicas
api.get('/getHotel', hotel.getHotel);
api.get('/getHotels', hotels.getHotels);
api.get('/getLocation', location.getLocation);

module.exports = api;
