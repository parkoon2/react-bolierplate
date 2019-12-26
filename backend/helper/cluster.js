const os = require('os')

const isDev = process.env.NODE_ENV === 'development'

let useCluster = false

if (!isDev) {
    useCluster = os.cpus().length
}

module.exports = useCluster