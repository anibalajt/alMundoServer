'use strict'
const _                       = require('underscore');
const Get                     = require('../services');
/******************************************************************************/
/**********************Cargar la descripcion del hotel ************************/
/******************************************************************************/
function getHotel(req, res){
  var options = {
    method: 'GET',
    url: encodeURI(`https://almundo.com.co/hotels/async/detail/${req.query.city}`),
    qs: req.query,
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    }
  };

  Get.request(options, (response) => {
    res.status(201).send(JSON.parse(response));
  })
}

module.exports = {
  getHotel
};
