'use strict'
const _                       = require('underscore');
const Get                     = require('../services');

function getHotels(req, res){
  console.log("getHotels ",req.query);

  var options = {
    method: 'GET',
    url: encodeURI(`https://almundo.com.co/hotels/async/${req.query.city}/hotels`),
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
  getHotels
};
