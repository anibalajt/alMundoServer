'use strict'

const Request              = require('request');
const config               = require('../config');

function request(options,cb) {

  Request(options, function (error, response, body) {
    if (error) throw new Error(error);
    cb(body)
  });

}

module.exports = {
  request
};
//https://almundo.com.co/hotels/async/1317855/hotels?date=2017-11-22,2017-11-23&rooms=2&type=CITY&offset=0&limit=247
//https://almundo.com.co/hotels/async/autocomplete/medellin
