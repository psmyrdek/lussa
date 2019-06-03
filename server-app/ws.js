const {dispatchGameAction, getGameState} = require('./services/state.service')

const {actions} = require('./services/actions');

const actionHandler = (socket) => ({gameId, action}) => {
    dispatchGameAction(gameId, action);
    io.in(gameId).emit(actions.updateGameState, getGameState(gameId));
}

module.exports.initWs = server => {
    io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Client connected');

        socket.on(actions.addPlayer, ({gameId, action}) => {
            socket.join(gameId);
        });
        
        socket.on(actions.addPlayer, actionHandler(socket));
        socket.on(actions.markReadiness, actionHandler(socket));
        socket.on(actions.colorTakenFromSupplier, actionHandler(socket));

    })
}