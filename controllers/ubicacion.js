'use strict'

const _                       = require('underscore');
const Get                     = require('../services');
/******************************************************************************/
/**************************Cargar la lista de ciudades ************************/
/******************************************************************************/
function getLocation(req, res) {
  var options = {
    method: 'GET',
    url: encodeURI(`https://almundo.com.co/hotels/async/autocomplete/${req.query.location}`),
    headers:
    {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    }
  };
  Get.request(options, (response) => {
    if(response){
      res.status(201).send(JSON.parse(response));
    }else{
      res.status(201).send({});
    }
  })

}

module.exports = {
  getLocation
};
