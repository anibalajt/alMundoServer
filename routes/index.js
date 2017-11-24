'use strict'

const express           = require('express');
const hotel             = require('../controllers/hotel');
const hotels            = require('../controllers/hoteles');
const location          = require('../controllers/ubicacion');
const api               = express.Router();


//Rutas publicas
api.get('/getHotel', hotel.getHotel);//cargamos la descripcion del hotel
api.get('/getHotels', hotels.getHotels);//buscamos los hoteles disponibles de una ciudad
api.get('/getLocation', location.getLocation);//buscamos ciudades

module.exports = api;
