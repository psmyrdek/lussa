const {createApp} = require('./server-app')
const {join} = require('path')

const config = {
    port: 8080,
    staticFilesRoot: join(__dirname, './client-app/dist/lussa')
}
const app = createApp(config)

app.listen(config.port, () => {
    console.log(`Listening at ${config.port}`)
})