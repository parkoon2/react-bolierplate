const http = require('http')
const express = require('express')
const path = require('path')

const app = express()
const server = http.createServer(app)
const PORT = require('./helper/port').SERVER_PORT
const middlewareConfigure = require('./middleware')
const exception = require('./helper/exception')

require('./config/database')

middlewareConfigure(app)

app.use(express.static(path.join(__dirname, '../', 'frontend', 'dist')));
app.use(exception.handle404Error)

server.on('listening', exception.handleListening.bind(this, PORT))
server.on('error', exception.handleServerError)

module.exports = server