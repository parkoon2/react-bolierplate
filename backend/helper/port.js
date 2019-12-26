const DEFAULT_PORT = 5501
exports.SERVER_PORT = normalizePort(process.env.PORT || DEFAULT_PORT)

function normalizePort(val) {
    let port = parseInt(val, 10)

    if (port < 0) return

    if (isNaN(port)) {
        return val
    }
    return port
}