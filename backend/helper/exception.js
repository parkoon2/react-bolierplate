const createError = require('http-errors')

exports.handle404Error = (req, res, next) => {
    next(createError(404));
}

exports.handleServerError = error => {
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

exports.handleListening = port => {
    console.log(`Server is running on ${port}.`);
}


