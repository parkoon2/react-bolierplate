const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const expressStatusMonitor = require('express-status-monitor')

const isDev = process.env.NODE_ENV === 'development';

module.exports = app => {
    app.use(compression())
    app.use(helmet())
    app.use(expressStatusMonitor())

    if (isDev) {
        app.use(morgan('dev'))
    }
};
