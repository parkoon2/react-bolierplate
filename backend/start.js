
const cluster = require('cluster')

const PORT = require('./helper/port').SERVER_PORT

const useCluster = require('./helper/cluster')

if (useCluster) {
    if (cluster.isMaster) {
        console.log(`Running cluster's master. Number of CPUs: ${useCluster}`);
        forkWorkers(useCluster)
    } else {
        startWorker()
    }
} else {
    console.log('Running without cluster.')
    startWorker()
}

function startWorker() {
    const server = require('./server')
    server.listen(PORT)
}

function forkWorkers(numberOfCpus) {
    for (let i = 0; i < numberOfCpus; i++) {
        const worker = cluster.fork()
        console.log(`Forked new worker: ${worker.id}`)

        worker.on('exit', (code, signal) => {
            if (signal) {
                console.error(`Worker was killed by signal: ${signal}`)
            } else if (code !== 0) {
                console.error(`Worker exited with error code: ${code}`)
            } else {
                console.log('Worker success!')
            }
        });
    }
}

