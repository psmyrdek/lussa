const stateService = require('./services/state.service')

module.exports.initWs = server => {
    io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Client connected')

        socket.on('join', ({ gameId }) => {
            socket.join(gameId);
            socket.to(gameId).emit('update game state', stateService.getGameState(gameId));
        });

        socket.on('player ready', ({ gameId, playerId }) => {
            stateService.markPlayerReadiness(gameId, playerId);

            socket.to(gameId).emit('update game state', stateService.getGameState(gameId));

            if (stateService.tryStartGame(gameId)) {
                io.in(gameId).emit('update game state', stateService.getGameState(gameId));
            }
        })

    })
}