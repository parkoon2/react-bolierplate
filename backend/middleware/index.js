const performace = require('./performace')
const security = require('./security')
const devtools = require('./devtool')

const isDev = process.env.NODE_ENV === 'development'

module.exports = app => {
    if (isDev) devtools(app)

    security(app)
    performace(app)

}
