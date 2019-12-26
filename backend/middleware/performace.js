const compression = require('compression')
const expressStatusMonitor = require('express-status-monitor')

module.exports = app => {
    app.use(compression())
    app.use(expressStatusMonitor())
}