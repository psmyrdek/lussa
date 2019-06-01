const stateService = require('./services/state.service')

module.exports.initWs = server => {
    io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Client connected')

        socket.on('join', (gameId) => {
            console.log(`Joining ${gameId}`)
            socket.join(gameId)

            socket.to(gameId).emit('update game state', stateService.getGameState(gameId));
        })
        
    })
}