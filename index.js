const {createServer} = require('http')
const {createApp} = require('./server-app')

const {join} = require('path')

const config = {
    port: process.env.PORT || 8080,
    staticFilesRoot: join(__dirname, './client-app/dist/lussa')
}

const app = createApp(config)
const server = createServer(app)

server.listen(config.port, () => {
    console.log(`Listening at ${config.port}`)
})

