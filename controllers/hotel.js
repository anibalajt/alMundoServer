'use strict'
const _                       = require('underscore');
const Get                     = require('../services');

function getHotel(req, res){
  console.log("getHotels ",req.query);

  https://almundo.com.co/hotels/async/detail/94257468H?date=2017-11-23,2017-11-24&rooms=2&type=CITY
  var options = {
    method: 'GET',
    url: encodeURI(`https://almundo.com.co/hotels/async/detail/${req.query.city}`),
    // { date: '2017-11-23,2017-11-24', rooms: '2', type: 'CITY' },
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
