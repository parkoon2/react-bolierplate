const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)
const PORT = require('./helper/port').SERVER_PORT
const middleware = require('./helper/middlewares')

middleware(app)

server.on('listening', handleListening)
server.on('error', handleError)

function handleError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error(`Pipe ${PORT} requires elevated privileges.`);
            process.exit(1);
        case 'EADDRINUSE':
            console.error(`Port ${PORT} is already in use.`);
            process.exit(1);
        default:
            throw error;
    }
}

function handleListening() {
    console.log(`Server is running on ${PORT}.`);
}

module.exports = server