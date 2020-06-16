const express = require('express')

const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/', routes)

module.exports = server