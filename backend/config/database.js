const mongoose = require('mongoose')
const exception = require('../helper/exception')


// Remove the warning with Promise
mongoose.Promise = global.Promise

try {
    mongoose.connect('[URL]', { useNewUrlParser: true })
} catch (err) {
    mongoose.createConnection('[URL]')
}

mongoose.connection
    .once('open', exception.handleDBConnection)
    .on('error', exception.handleDBError)