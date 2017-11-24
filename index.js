'use strict'

const app               = require('./app')
const config            = require('./config')
const http 		= require('http')

let server = http.createServer(app)
server.listen(config.port , () => {
  console.log('API REST corriendo en http://127.0.0.1:'+config.port);
})
