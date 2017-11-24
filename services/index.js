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
